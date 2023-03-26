const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;
console.log(META_PASSWORD);
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "vladyslavlysenko@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "lobate3059@oniecan.com",
//   from: "vladlysenko123456@ukr.net",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong> from localhost:3000</p>",
// };

const sendEmail = (email) => {
  transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
};

module.exports = sendEmail;
