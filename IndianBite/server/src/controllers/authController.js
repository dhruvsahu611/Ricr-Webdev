import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genToken } from "../utils/authToken.js";

export const UserRegister = async (req, res, next)=>{
    try {
        //accept data from Frontend
        const {fullName, email, mobileNumber, password} = req.body;


        //check null property
        if(!fullName || !email || !mobileNumber || !password){
            const error = new Error("All Fields Required");
            error.statusCode=400;
            return next(error);
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            const error = new Error("Email Already Registered");
            error.statusCode=409;
            return next(error);
        }

        //encript the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //save data to database
        const newUser = await User.create({
            fullName,
            email,
            mobileNumber,
            password: hashPassword,
        });

        //send response to fe
        console.log(newUser);
        res.status(201).json({message:"Registered Succesfully"});


    } catch (error) {
        next(error);
    }
};


export const UserLogin = async (req, res, next)=>{
    try {
        //fetch data from fe
        const {email, password} = req.body;

        if(!email || !password){
            const error = new Error("All Fields Required");
            error.statusCode=400;
            return next(error);
        }

        const existingUser = await User.findOne({email});

        if(!existingUser){
            const error = new Error("Email Not Registered");
            error.statusCode=401;
            return next(error);
        }

        //verify password
        const isVerified = await bcrypt.compare(password, existingUser.password);

        if(!isVerified){
            const error = new Error("Password didn't match");
            error.statusCode=401;
            return next(error);
        }

        //token generation will be done after it.

        await genToken(existingUser, res);


        //send message to fe
        res.status(200).json({message:"Login Successfull", data:existingUser});

        //khatam tata bye bye

    } catch (error) {
        next(error);
    }
};

export const UserLogout = async (req, res, next)=>{
    try {
        res.status(200).json({message:"Logout Successfull", data:existingUser});
    } catch (error) {
        next(error);
    }
};