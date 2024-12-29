const express=require("express");
const router=express.Router();
const path=require("path");

router.get("/add-product",(req,res,next)=>{
    console.log("This is Add-Product Middleware(/Add-Product).");
    //At the end this is all dummy html code not Actually how a product operates
    //What we use instead are reference to actual html pages that we made in view folder
    
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));        //'../' is only useful in windows whereas '..' works everywhere to go out of a folder or directory
})

router.post("/add-product",(req,res)=>{         //Note: We can omit a argument we are planning to not use, here next()
    console.log(req.body);        //Here i am logging only value || Teacher did req.body
    res.redirect("/shop/");      //Takes setHeader,change StatusCode and redirects in same function

});

module.exports=router;