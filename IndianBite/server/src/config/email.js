import nodemailer from "nodemailer";
// import dotenv from 'dotenv';
// dotenv.config();

const sendEmail = async (to, subject, message) => {
  try {
    console.log("Started mail send");
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSCODE,
      },
    });
    
    const mailOption = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      html: message,
    };

    const res = await transporter.sendMail(mailOption);
    console.log(res);
  } catch (error) {
    console.log(error);
    
  }
};

// sendEmail("dsjee611@gmail.com", "test email", "<p style='color:red;'>Text Message</p>");

export default sendEmail;