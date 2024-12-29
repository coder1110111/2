const express=require("express");
const router=express.Router();
const path=require("path");

router.get("/",(req,res,next)=>{
    console.log("In Contact");
    res.sendFile(path.join(__dirname,'..','views','contact.html'));
})

router.post("/",(req,res,next)=>{
    console.log("Success!");
    res.redirect("/success/");
})

module.exports=router;