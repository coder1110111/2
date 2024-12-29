const express=require("express");
const router=express.Router();
const path=require("path");

router.get("/",(req,res,next)=>{
    console.log("In another Middleware.");
    //res.send("<h1>Hello From Main Root(/).</h1>");          //Instead of sending this fake html line
    //res.sendFile() take argument of absolute path so if we do './views/shop.html' it will no work because './' here refer to the root of the System and not the root of your program which here is '2'

    //The path sendFile takes is absolute path as sometimes it can be big we use a middleware 'path'. This 
    res.sendFile(path.join(__dirname,'..', 'views','shop.html'));

    //Here path will return a concatenated address. __dirname will give us absolute address of the file it is called in, and views is a Sibling Folder, To access it we have to give string --> "../" which means to go up one level then we just have to send segments of address as strings till we get the complete result. We also use path because when it is loaded it can detect what OS it is in and then construct the address based on that. Whereas we can give absolute address form File Explorer but it will then only work for windows.
    //For Linux address: ./some/fdaf/fdg.txt   whereas for Windows Address : C:\Riot Games\someFolder

})


module.exports=router;