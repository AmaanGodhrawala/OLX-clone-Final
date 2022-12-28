// import { response } from "express";
const userModel  = require( "../../Model/User");
const Bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const dotenv = require('dotenv');
const express = require('express');
const Formidable = require('formidable');
const router =express.Router()

dotenv.config()
//===================USER AUTH==============
router.post('/api/user-register',(req,res)=>{
    const form = new Formidable.IncomingForm()
    form.parse(req, async(err,fields, files)=>{
        // const{email,password, name, verifiedPassword, isSeller} =fields;
        const {email, password, name, verifiedPassword} = fields;
        try {
            // if(!email||!password||!name||!verifiedPassword||!isSeller){
            if(!email||!password||!name||!verifiedPassword){
                return res.status(400).json({msg:"All fields required"})
            }
            if(password !== verifiedPassword){
                  return res.status(400).json({msg:"Both password should match"})
            }
            const user = await userModel.findOne({email:email})
            if (user) {
                return res.status(400).json({msg:"User already exists"})
            }
            const salt = await Bcrypt.genSalt(15)
            const hashedPassword = await Bcrypt.hash(password,salt)
            
            const newUser=new userModel({
                name, 
                email,
                password:hashedPassword,
                // isSeller,
            })
            const savedUser = await newUser.save();
            const token = JWT.sign({id: savedUser._id}, process.env.jwt_secret)
            return res.status(201).json({msg:"Account successfully created",
            token:token, 
            name:savedUser.name,
            email:savedUser.email,
        } )

        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Server is down, please try again later"})
        }
        
    })
})

router.post('/api/user-login',(req,res)=>{
    const form = new Formidable.IncomingForm();
    form.parse(req, async(err, fields, files)=>{
        const {email,password} = fields;
        try {
            if(!email||!password){
                return res.status(400).json({msg:"All fields are to be entered"})
            }
            const user = await userModel.findOne({email:email})
            if (!user) {
                return res.status(400).json({msg:"User doesnt exist"})
            }
            const isPasswordMatch = await Bcrypt.compare(password, user.password)
            if (!isPasswordMatch) {
                return res.status(400).json({msg:"Invalid credentials"})
            }
            const token = JWT.sign({id:user._id}, process.env.jwt_secret)
            return res.status(200).json({
                msg:"Logging you in...",
                token:token,
                name:user.name,
                email:user.email,
            })
        } catch (error) {
            return res.status(500).json({msg:"Server is currently down please try again later"})
        }
    })
})
module.exports = router