const nodemailer = require("nodemailer");

async function main(to, subject, msg) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_CLIENT_HOST,
    port: process.env.EMAIL_CLIENT_PORT,
    auth: {
      user: process.env.EMAIL_CLIENT_USER,
      pass: process.env.EMAIL_CLIENT_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: "test@test.com",
    to: to,
    subject: subject,
    text: msg,
  });
}

function sendEmail(to, subject, msg) {
  return new Promise((resolve, reject) => {
    main(to, subject, msg)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  sendEmail,
};
