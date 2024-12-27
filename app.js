const express=require("express");
const bodyparse=require("body-parser");

const app=express();

app.use(bodyparse.urlencoded({extended:false}));        //This enables parser in our program. Internally it calls the next function within it at the end.
    

    app.use("/add-product",(req,res,next)=>{
        console.log("This is Add-Product Middleware(/Add-Product).");
        res.send(`<html><body><form action="/product" method="POST"><input type="text" name="title" placeholder="title"><br><input type="text" name="size" placeholder="size"><button type="submit">Add Product</button></form></body></html>`)
    });

    app.post("/product",(req,res)=>{         //Note: We can omit a argument we are planning to not use, here next()
        console.log(req.body);        //Here i am logging only value || Teacher did req.body
        res.redirect("/");      //Takes setHeader,change StatusCode and redirects in same function

    });

    app.use("/",(req,res,next)=>{
        console.log("In another Middleware.");
        res.send("<h1>Hello From Main Root(/).</h1>");
    })


app.listen(3300);