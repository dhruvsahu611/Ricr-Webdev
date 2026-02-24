import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genToken, genOtpToken } from "../utils/authToken.js";
import OTP from "../models/otpModel.js";
import { sendOTPEmail } from "../utils/emailService.js";

export const UserRegister = async (req, res, next) => {
  try {
    //accept data from Frontend
    const { fullName, email, mobileNumber, password, role } = req.body;

    //check null property
    if (!fullName || !email || !mobileNumber || !password || !role) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("Email Already Registered");
      error.statusCode = 409;
      return next(error);
    }

    //encript the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const photoURL = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const photo = {
      url: photoURL,
    };

    //save data to database
    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
      role,
    });

    //send response to fe
    console.log(newUser);
    res.status(201).json({ message: "Registered Succesfully" });
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    //fetch data from fe
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("Email Not Registered");
      error.statusCode = 401;
      return next(error);
    }

    //verify password
    const isVerified = await bcrypt.compare(password, existingUser.password);

    if (!isVerified) {
      const error = new Error("Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

    //token generation will be done after it.

    await genToken(existingUser, res);

    //send message to fe
    res.status(200).json({ message: "Login Successfull", data: existingUser });

    //khatam tata bye bye
  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.clearCookie("parleG");
    res.status(200).json({ message: "Logout Successfull"});
  } catch (error) {
    next(error);
  }
};

export const UserGenOTP = async (req, res, next) => {
  try {
    const { email } = req.body;

    //check null property
    if (!email) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("Email not Registered");
      error.statusCode = 401;
      return next(error);
    }

    // checking otp already exist or not:
    const existingUserOTP = await OTP.findOne({ email });
    if (existingUserOTP) {
      await existingUserOTP.deleteOne();
    }

    const otp = Math.floor(Math.random() * 1000000).toString();
    const salt = await bcrypt.genSalt(10);
    const hashOTP = await bcrypt.hash(otp, salt);

    await OTP.create({
      email,
      otp: hashOTP,
    });
    await sendOTPEmail(email, otp);

    res.status(200).json({ message: "OTP send on registered email" });
  } catch (error) {
    next(error);
  }
};

export const UserVerifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUserOTP = await OTP.findOne({ email });

    if (!existingUserOTP) {
      const error = new Error("Email Not Registered");
      error.statusCode = 401;
      return next(error);
    }
    console.log(otp, "otp vala otp");
    console.log(existingUserOTP.password);
    
    

    //verify password
    const isVerified = await bcrypt.compare(String(otp), existingUserOTP.otp);

    if (!isVerified) {
      const error = new Error("Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

    await existingUserOTP.deleteOne();

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

    //token generation will be done after it.
    console.log('tokengenration');
    

    genOtpToken(existingUser, res);
    console.log("finally responsing start");
    

    //send message to fe
    res.status(200).json({ message: "Verified"});
  } catch (error) {
    next(error);
    console.log("authController mein verification mein error hai");
  }
};

export const UserForgetPassword = async (req, res, next) => {
  try {
    const { newPassword } = req.body;
    const currentUser = req.user;

    if (!newPassword) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    currentUser.password = hashPassword;

    await currentUser.save();

    res
      .status(200)
      .clearCookie("otpToken")
      .json({ message: "Password Changed. Please login again" });
  } catch (error) {
    next(error);
  }
};
