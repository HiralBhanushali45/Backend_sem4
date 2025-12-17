// 2) Write a program that uses child_process.spawn() to run the command to print files and 
// folders of current directory. (B) 

const child_process=require("child_process");
const child=child_process.spawn("cmd.exe",["/c","dir","/s","c:\\"]);
child.stderr.on("data",(data)=>{
    console.log(`Data:${data}`)
})
child.stdout.on("data",(data)=>{
    console.log(`Stdout:${data}`)
})
child.on("close",(data)=>{
    console.log(`CLOSE:${data}`)
})

