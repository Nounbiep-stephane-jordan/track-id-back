const database= require("../firebase/firebase.js")
const db = database.db
const Tesseract = require('tesseract.js');

const processImage = async (req, res, next) => {
     try {
       let image = req.body.data

       Tesseract.recognize(image)
       .then(function({data:{text}}) {
         console.log(text,"text");
       })
       .catch(function(err){
        console.log(err,"err in processuing")
       })

 


       return res.status(200).json({ message: "Image processed sucessfully" });
        
     } catch (e) {
       console.log(e,"in processing image error")
       return res.status(500).json({ message: "Unable to process the image try again" ,error:e});
     }
   }
   
 
   module.exports ={processImage}