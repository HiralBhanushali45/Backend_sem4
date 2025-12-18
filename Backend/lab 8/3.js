const express=require("express");
const app=express();
const fs=require("fs")

   app.get("/about",(req,res)=>{
fs.readFile("about.txt",(err,data)=>{
    if(err){
        console.log("Error",err)
        return;
    }
   res.send(`Data: ${data.toString()}`);
});
   })

      app.get("/contact",(req,res)=>{
fs.readFile("contact.txt",(err,data)=>{
    if(err){
        console.log("Error",err)
        return;
    }
   res.send(`Data: ${data.toString()}`);
});
})



app.listen(3000,()=>{
    console.log("Server started at port 3000");
})