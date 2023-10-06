const express = require("express")
const imageProcessingconroller = require("../controller/imageProcessingController")

const Routes = express.Router();
Routes.post("/process_image",imageProcessingconroller.processImage);
Routes.get("/",(req,res)=> res.status(200).json({message:"ok everything"}))

module.exports  = {Routes}