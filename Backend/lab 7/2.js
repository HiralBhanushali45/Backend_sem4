// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS. 

const http=require("http")
const server=http.createServer((req,res)=>{
    res.setHeader("context-type","text/html");
    if(req.url==='/'){
        res.statusCode=200
        res.end("Home page")
    }
    else if(req.url==="/about"){
        res.end("about")
    }
    else if(req.url==="/contact"){
        res.end("contact")
    }
    else if(req.url==="/logout"){
        res.end("logout")
    }
     else if(req.url==="/login"){
        res.end("login")
    }
    else{
        res.statusCode=404;
        res.end("Not found");
    }
  
});
  server.listen(3000,()=>{
    console.log("server at port 3000")
});