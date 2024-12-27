const express=require("express");
const router=express.Router();

router.get("/add-product",(req,res,next)=>{
    console.log("This is Add-Product Middleware(/Add-Product).");
    res.send(`<html><body><form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="title"><br><input type="text" name="size" placeholder="size"><button type="submit">Add Product</button></form></body></html>`)
});

router.post("/add-product",(req,res)=>{         //Note: We can omit a argument we are planning to not use, here next()
    console.log(req.body);        //Here i am logging only value || Teacher did req.body
    res.redirect("/shop");      //Takes setHeader,change StatusCode and redirects in same function

});

module.exports=router;