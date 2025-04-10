// api/contact.js - Optimized Vercel Serverless Function with timeout handling
import nodemailer from 'nodemailer';

// Wrap async operations with timeout
const withTimeout = (promise, ms = 8000) => {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`Operation timed out after ${ms}ms`));
    }, ms);
  });

  return Promise.race([
    promise,
    timeoutPromise
  ]).finally(() => clearTimeout(timeoutId));
};

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token) {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error('Missing reCAPTCHA secret key in environment variables');
      throw new Error('Missing reCAPTCHA configuration');
    }

    const response = await withTimeout(
      fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`,
      }), 
      5000 // 5 second timeout for reCAPTCHA verification
    );

    const data = await response.json();
    
    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data);
      throw new Error(`reCAPTCHA verification failed: ${data['error-codes']?.join(', ') || 'Unknown error'}`);
    }
    
    return true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  // CORS headers for API routes
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  // Handle OPTIONS method for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  // Only allow POST requests for actual form submission
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Extract form data
    const { name, email, message, captchaToken } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    if (!captchaToken) {
      return res.status(400).json({ 
        success: false, 
        message: 'reCAPTCHA verification required' 
      });
    }

    // Verify reCAPTCHA token
    try {
      await verifyRecaptcha(captchaToken);
    } catch (captchaError) {
      console.error('Failed reCAPTCHA verification:', captchaError);
      return res.status(400).json({ 
        success: false, 
        message: 'Failed to verify reCAPTCHA. Please try again.' 
      });
    }

    // Configure email transport
    const port = parseInt(process.env.EMAIL_PORT || '587');
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: port,
      secure: port === 465, // true only for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Set timeout options to prevent hanging
      connectionTimeout: 5000, // 5 seconds
      greetingTimeout: 5000,   // 5 seconds
      socketTimeout: 5000      // 5 seconds
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
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

    try {
      // Send email with timeout
      await withTimeout(
        transporter.sendMail(mailOptions),
        7000 // 7 second timeout for email sending
      );
      
      console.log('Email sent successfully');
      return res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully' 
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Return a simplified error response
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to send email. Please try again later.'
      });
    }
  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    
    // Return a generic error
    return res.status(500).json({ 
      success: false, 
      message: 'A server error occurred. Please try again later.'
    });
  }
}