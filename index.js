/* Sending a automated email to the list of email stored in the excel sheet */

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const XLSX = require('xlsx');
const dotenv = require('dotenv');
let PORT = process.env.PORT || 3000;

// to configure enviornment variables 
dotenv.config();

// read excel file where all the reciepent mail addresses are stored
let emailListWorkbook = XLSX.readFile("emailIDList.xlsx");
let worksheet = emailListWorkbook.Sheets[emailListWorkbook.SheetNames[0]];

/*declare transporter to send the mail using the sender details 
such as service, sender email address and sender password*/

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      //to protect user name and password env variables are used
    user: process.env.USER_MAIL,
    pass: process.env.PASSWORD
  },
  tls:{
      rejectUnauthorized: false,
  }
});

//sedning mail to the each reciepent of the excel sheet
for(let cell in worksheet){
    const value = worksheet[cell].v;
    let mailOptions = {
        from: process.env.USER_MAIL,
        subject: 'Sending Email using Node.js',
        text: 'Email sent Successfully using nodemailer module of Node js!'
    };
    mailOptions.to = value;
    
//promise to send email and log the error and success msg
    transporter
    .sendMail(mailOptions)
    .then(function(res){
    console.log("Email Sent Successfully",res);
    })
    .catch(function(err){
    console.log(err)
    });
}





