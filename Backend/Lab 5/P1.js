// 1) Write a Node.js program using child_process.exec() to run the shell command to check the 
// current version of node. (A) 
const child_process=require("child_process")
exec("node--version"),(error,stdout,stderr)=>{
    if(error){
        console.log()
    }
}