const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.resend.com",
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
  pooled: true,
  maxMessages: Infinity,
  maxConnections: 10,
  secure: true,
});

export default transporter;
