import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { to, subject, text, html } = req.body;

  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'jackpangalia1@gmail.com',
      pass: 'google app password',
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER_ADDRESS,
      to: 'jackpangalia1@gmail.com',
      subject,
      text,
      html,
    });

    res.status(200).json({ message: "Email sent successfully" }); // ✅ Success response
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ error: "Error sending email" });
  }
}
