import httpStatus from "http-status";

import {User}  from "../models/user.model.js";

import bcrypt , {hash} from "bcrypt";

import crypto from "crypto";







const login=async(req,res)=>{
      
    const {username, password}=req.body;

    if(!username || !password){
        res.status(401).json({message:"Please Provide Information"})
    }
    
    try{

        const user= await User.findOne({username});

        if(!user){
            res.status(401).json({message:"User Not Exist Please Signup!"});
        }

        if(bcrypt.compare(password, user.password)){
            let token=crypto.randomBytes(20).toString("hex"); // Token 

            user.token=token;
            await user.save();
            return res.status(httpStatus.OK).json({token:token});
        }

    }catch(e){
            res.status(500).json({message:`Somethings went wrong${e}`});
    }

}








const register=async (req, res)=>{

    const {name ,username, password}= req.body;


    try{
            const existingUser=await User.findOne({username});
            if(existingUser){
                return res.status(httpStatus.FOUND).json({message: "User Already Exist"});
            }

            const hashedPassword=await bcrypt.hash(password,10);

            const newUser=new  User({
                name:name,
                username:username,
                password:hashedPassword
            })

            await newUser.save();

            res.status(httpStatus.CREATED).json({message: "User Registerd Successfully"});

    }catch(e){
            res.json({message:`Somethings went wrong${e}`});
    }

}


export {login, register};