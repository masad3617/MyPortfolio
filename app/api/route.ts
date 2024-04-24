import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

// Exporting a named function for handling POST requests, renamed to uppercase
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);
    const mailData = {
      from: `${body.email}`,
      to: 'mdasad3617@gmail.com',
      subject: `New feedback from ${body.name}`,
      text: `${body.message}`,
      html: `<p>${body.message}</p>`,
    };

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      secure: false, 
      auth: {
        user: "7f59274651119e",
        pass: "b020183f14ce86",
      },
    });

    transport.sendMail(mailData, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to send email" });
        return;
      }
      console.log(`Message sent: ${info.messageId}`);
      res.status(200).json({ message: "Email sent successfully", messageId: info.messageId });
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}