import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const userExist = await userModel.findOne({email});
        if(userExist) {
            return res.status(400).json({message: 'Email already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({name, email, password: hashedPassword});
        res.status(200).json({message:'Signup successful', user: {id: user._id, name: user.name, email: user.email}})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const login = async (req, res) => {
    try {
       const {email, password} = req.body;
       const user = await userModel.findOne({email});
       if(!user) return res.status(400).json({message: 'Invalid Email'});
       
       const isMatch = bcrypt.compare(password, user.password);
       if(!isMatch) return res.status(400).json({message: 'Incorrect Password'});

       const token = jwt.sign({id: user._id},process.env.JWT_SECRET, {expiresIn: '7d'});
       res.json({message: 'Login Successful', token, user: {id: user._id, name: user.name, email: user.email}});

    } catch (error) {
       res.status(500).json({message: error.message}) 
    }
}