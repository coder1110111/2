const express=require("express");
const router=express.Router();
const path=require("path");

router.get("/",(req,res,next)=>{
    console.log("In Success HTML");
    res.sendFile(path.join(__dirname,'..','views','success.html'));
})

module.exports=router;