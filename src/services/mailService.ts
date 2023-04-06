import FormData from 'form-data';
import mailgun from 'mailgun-js';
import dotenv from 'dotenv';

dotenv.config();

export default class MailService {
  private static instance: MailService
  private mailgun: mailgun.Mailgun | null = null;

  private constructor() {
  }

  static getInstance() {
    console.log('getInstance');
    if (!MailService.instance) {
      MailService.instance = new MailService();
    }
    return MailService.instance;
  }

  async createConnection() {
    console.log('createConnection');
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
        throw new Error('Missing required environment variables for Mailgun');
      }
    this.mailgun = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    });
  }

  async sendOtpMail(
    requestId: string | number | string[],
    to: string,
    otp: string
  ) {
    console.log("sendOtpMail")

    if (!this.mailgun) {
      throw new Error('Mailgun client not initialized');
    }

    const data = {
      from: process.env.MAILGUN_FROM_ADDRESS,
      to: to,
      subject: 'Your OTP',
      text: `Your OTP is ${otp}`,
      html: `<p>Your OTP is <strong>${otp}</strong></p>`,
    };

    return await this.mailgun.messages().send(data)
    .then((info) => {
      console.log(`${requestId}- Mail sent successfully`);
      if (process.env.NODE_ENV !== 'local') {
        console.log('Mailgun');
      }
      return info;
    });
  }
}
