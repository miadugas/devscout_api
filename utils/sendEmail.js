const nodemailer = require("nodemailer");

const sendEmail = async (options) => {

    //create a transporter object using default SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    // send mail with defined transport object
    const message = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_NAME}>`,
        to: options.email,
        subject: options.subject, // Subject line
        text: options.message // plain text body
        //html: "<b>Hello, do you have a minute?</b>", // html body for later development
    };

    const info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);

}

module.exports = sendEmail;