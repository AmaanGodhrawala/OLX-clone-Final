const router = require('express').Router();
const { request, response } = require('express');
const productModel = require("../../Model/AllProducts")
router.get("/api/products", async(request, response)=>{
    await productModel.find().exec().then((res)=>{
        console.log("route");
        return response.status(200).json(res)
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;