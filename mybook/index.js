const http  = require('http')   //核心模块的引入


http.createServer((req,res)=>{
    res.end("hello")
}).listen(3000,()=>{
    console.log("running...");
})