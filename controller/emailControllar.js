const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_ID, // generated ethereal
      pass: process.env.MP, // generated ethereal password
    },
  });

  //send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Hey" <abc@gmail.com>', //sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text,
    html: data.html,
  });
});

module.exports = sendEmail;
