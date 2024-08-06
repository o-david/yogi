var nodemailer = require('nodemailer');
var dotenv = require('dotenv');
dotenv.config()

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'okekedavid1333@gmail.com',
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: 'okekedavid1333@gmail.com',
  to: 'anekeaustin@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});