import { Router } from "express";
import dotenv from 'dotenv'
import  MailController from "../controllers/MailController";
import  MailService  from "../services/MailService";
import { OTPGenerator } from "../services/OTP_generator_service";
dotenv.config();

const mailRouter = Router();

const mailService = new MailService();

const otpGenerator = new OTPGenerator();

const mailController =  new MailController(mailService, otpGenerator);

mailRouter.get('/send-email', mailController.sendEmail);


export default mailRouter;
