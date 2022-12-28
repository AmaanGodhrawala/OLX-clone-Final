const { request, response } = require('express');
const productModel = require("../../Model/AllProducts")
const Formidable = require('formidable');
const router = require('express').Router();
const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret,
});

router.post("/api/upload", (request, response)=>{
    const form = new Formidable.IncomingForm()
    form.parse(request, (error, fields, files)=>{
        const {name, owner, email } = fields
        const {image} = files;
        cloudinary.uploader.upload(image.filepath, {folder:"/OLX-CLONE"}, async(error, results)=>{
            const image_url= results.secure_url;

            const product = new productModel({
                name : name, 
                owner: owner, 
                email: email, 
                image: image_url,
            });
            const savedProduct = await product.save();

            return response.status(201).json({msg:"Product posted"})
        })
    })
})

module.exports = router;