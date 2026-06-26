require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();


app.use(cors()); 
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact from ${name}: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
