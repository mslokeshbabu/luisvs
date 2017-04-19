'use strict';
const nodemailer = require ('nodemailer');

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'gayathridevi.raghunath@gmail.com',
                    pass: 'Manasa25Aug'
                }

            });

            // setup email data with unicode symbols
            let mailOptions = {
                    from: 'gayathridevi.raghunath@gmail.com', // sender address
                    to: 'lokeshbabu.ms@gmail.com', // list of receivers
                    subject: 'Hello !', // Subject line
                    text: " " // plain text body
            };
