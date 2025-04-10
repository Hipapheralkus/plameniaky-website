// api/contact.js - Vercel Serverless Function for handling contact form submissions
import nodemailer from 'nodemailer';

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token) {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      throw new Error('Missing reCAPTCHA secret key');
    }

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    // Log the full verification response for debugging
    console.log('reCAPTCHA verification response:', data);
    
    if (!data.success) {
      throw new Error(`reCAPTCHA verification failed: ${data['error-codes']?.join(', ') || 'Unknown error'}`);
    }
    
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message, captchaToken } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate captcha token
    if (!captchaToken) {
      return res.status(400).json({ message: 'reCAPTCHA verification required' });
    }

    try {
      // Verify reCAPTCHA
      await verifyRecaptcha(captchaToken);
    } catch (captchaError) {
      console.error('Error verifying reCAPTCHA:', captchaError);
      return res.status(400).json({ 
        message: 'Failed to verify reCAPTCHA. Please try again.',
        error: captchaError.message
      });
    }

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Log email configuration for debugging (excluding password)
    console.log('Email configuration:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      user: process.env.EMAIL_USER,
      // Don't log the password
    });

    // Prepare email data
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'info@plameniaky.sk',
      subject: `Nová správa z webstránky od ${name}`,
      text: `
Meno: ${name}
Email: ${email}

Správa:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #725692;">Nová správa z webstránky Plameniaky.sk</h2>
  <p><strong>Od:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #725692;">
    <p><strong>Správa:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  </div>
</div>
      `,
    };

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      
      // Return success
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Return detailed error for debugging
      return res.status(500).json({ 
        message: 'Failed to send email',
        error: emailError.message,
        code: emailError.code
      });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ 
      message: 'An unexpected error occurred',
      error: error.message
    });
  }
}