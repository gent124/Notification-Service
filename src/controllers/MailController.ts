import { Request, Response } from "express";
import MailService  from '../services/MailService'
import { OTPGenerator } from "../services/OTP_generator_service";

export default class MailController {

    constructor (
        private readonly mailService: MailService,
        private otpGenerator: OTPGenerator
    ) {

    }


    sendEmail = async (req: Request, res: Response) => {
        this.mailService.createConnection();
        this.mailService.getInstance();
        try {
            await this.mailService.sendOtpMail('2','gentraifi14@gmail.com', this.otpGenerator.generateOTP());
            res.send('Email sent!');
          } catch (error) {
            console.error(error);
            res.status(500).send('Error sending email');
          }
    }

}
