import express from 'express';
import MailService from './services/mailService';
import nanoid from 'nanoid';
import dotenv from 'dotenv';

dotenv.config();

// Create a new instance of the MailService
const mailService = MailService.getInstance();

mailService.createConnection();
// Create a new Express app
const app = express();
const generateOtp = nanoid.customAlphabet('1234567890', 6);
const otp = generateOtp();

// Define a route that sends an email when it is called
app.get('/send-email', async (req, res) => {
  try {
    await mailService.sendOtpMail('1','gentraifi14@gmail.com',otp);
    res.send('Email sent!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

const port = process.env.PORT || 3000;

// Start the app listening on the specified port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
