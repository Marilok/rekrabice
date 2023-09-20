const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  // pool: true,
  // maxMessages: 1000,
  dkim: {
    domainName: "rekrabice.cz",
    keySelector: "nodemailer",
    privateKey: process.env.EMAIL_DKIM_PRIVATE_KEY,
    // cacheDir: "/tmp", // TODO: implement cacheDir
    // cacheTreshold: 100 * 1024,
  },
  secure: true,
});

export default transporter;
