import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact';

// @desc    Send a contact message
// @route   POST /api/contact
// @access  Public
export const sendContactMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, message } = req.body;

    // Create new contact entry
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Error in sendContactMessage:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending message',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
}; 