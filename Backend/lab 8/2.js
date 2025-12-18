const express =require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send("Home");
})
app.get("/about",(req,res)=>{
    res.send("about");
})
app.get("/contact",(req,res)=>{
    res.send("contact");
})
app.get("/login",(req,res)=>{
    res.send("login");
})
app.get("/logout",(req,res)=>{
    res.send("logout");
})
app.use((req,res)=>{
    res.status(404).send("page not found")
})

app.listen(3000,()=>{
    console.log("server at port 3000")
})