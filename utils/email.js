const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    console.log(' process.env.EMAIL_HOST', process.env.EMAIL_HOST);
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 25,
      auth: {
        user: 'df2336820d8a8d',
        pass: '5a5ad21fedee9e',
      },
      tls: {
        rejectUnauthorized: false, // Allows self-signed certificates
      },
    });
    // define the email options
    const mailOptions = {
      from: 'user@massoud.io',
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
