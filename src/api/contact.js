// api/contact.js
// Requires: npm install nodemailer

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    console.log(`Method ${req.method} Not Allowed`);
    // Set Allow header is good practice for 405
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, message, captchaToken } = req.body;

  // --- Basic Input Validation ---
  if (!name || !email || !message || !captchaToken) {
      console.log('Missing fields:', { name: !!name, email: !!email, message: !!message, captchaToken: !!captchaToken });
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  // --- CAPTCHA Verification ---
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
     console.error("RECAPTCHA_SECRET_KEY environment variable not set.");
     // Don't expose this specific error to the client for security
     return res.status(500).json({ success: false, message: 'Server configuration error.' });
  }

  try {
    console.log("Verifying CAPTCHA token...");
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(captchaToken)}`;
    // Optionally add remoteip: &remoteip=${encodeURIComponent(req.headers['x-forwarded-for'] || req.socket.remoteAddress)}

    const verificationResponse = await fetch(verificationUrl, { method: 'POST' });
    if (!verificationResponse.ok) {
        // Handle potential network errors talking to Google
        throw new Error(`reCAPTCHA verification request failed with status: ${verificationResponse.status}`);
    }
    const verificationData = await verificationResponse.json();
    console.log("reCAPTCHA verification data:", verificationData);

    // Check for success and score (adjust score threshold as needed)
    // Also check action if you implemented it in the frontend execute call
    if (!verificationData.success || (verificationData.score && verificationData.score < 0.5) /* || verificationData.action !== 'submit' */) {
      console.log("CAPTCHA verification failed:", verificationData);
      return res.status(400).json({ success: false, message: 'Failed CAPTCHA verification.' });
    }
    console.log("CAPTCHA verification successful.");

    // --- Verification Passed - Send Email ---

    // Configure Nodemailer transporter using environment variables
    // Make sure these are set in your Vercel project settings!
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,      // e.g., 'smtp.example.com'
      port: parseInt(process.env.EMAIL_PORT || "587", 10), // e.g., 587 or 465
      secure: (process.env.EMAIL_PORT === '465'), // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,    // Your sending email address
        pass: process.env.EMAIL_PASS,    // Your email password or app-specific password
      },
      // Optional: Add TLS options if needed for specific providers like Office365
      // tls: {
      //   ciphers:'SSLv3'
      // }
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER, // Sender address (use configured FROM or fallback to USER)
      to: process.env.EMAIL_TO,            // List of receivers (your receiving email)
      subject: `Nová správa z kontaktného formulára od ${name}`, // Subject line
      text: `Meno: ${name}\nEmail: ${email}\n\nSpráva:\n${message}`, // Plain text body
      html: `<p><strong>Meno:</strong> ${name}</p>
             <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
             <p><strong>Správa:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`, // HTML body
       replyTo: email // Set the Reply-To header to the user's email
    };

    console.log("Attempting to send email...");
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");

    // Send success response to frontend
    return res.status(200).json({ success: true, message: 'Form submitted successfully!' });

  } catch (error) {
    console.error("Error during CAPTCHA verification or email sending:", error);
    // Determine if it's a nodemailer specific error or general error
    const message = error.code === 'EENVELOPE' || error.responseCode >= 500 ?
                    'Chyba pri odosielaní emailu.' : // More specific error for email issues
                    'Internal Server Error.';
    return res.status(500).json({ success: false, message });
  }
}