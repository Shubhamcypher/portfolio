'use client'
import nodemailer from 'nodemailer';

export default async (req:any, res:any) => {
  if (req.method === 'POST') {
    console.log("I am here");
    
    const { name, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shubhamdevu023@gmail.com',
        pass: 'Shubham@123',
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'shubhamdevu023@gmail.com',
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
