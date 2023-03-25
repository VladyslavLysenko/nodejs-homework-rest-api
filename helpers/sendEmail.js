const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "vladlysenko123456@ukr.net",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "lobate3059@oniecan.com",
  from: "vladlysenko123456@ukr.net",
  subject: "Test email",
  html: "<p><strong>Test email</strong> from localhost:3000</p>",
};


module.exports = transport;
