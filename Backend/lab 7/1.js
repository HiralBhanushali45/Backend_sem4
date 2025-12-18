// 1. Create a hello world webapp using “http” core module in NodeJS.
const http=require("http")
const server=http.createServer((req,res)=>{
    res.end("hello World");
});
server.listen(3000,()=>{
    console.log("server at port 3000")
});


