import nanoid from 'nanoid';

export class OTPGenerator {

    generateOTP = () => {
        const generateOtp = nanoid.customAlphabet('1234567890', 6);
        const otp = generateOtp();
        return otp;
    };
}
