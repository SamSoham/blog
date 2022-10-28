const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    res.setHeader("Content-type","text/html");
    let path ="./views";

switch(req.url){
    case "/":path+="/index.html";
    res.statusCode=200;
    break;
    case "/about": path+="/about.html";
    res.statusCode=200;
    break;
    case "/about-me":res.statusCode = 301;
    res.setHeader('location','/about');
    res.end();
    default: path+="/error.html";
    res.statusCode=404;
    break;
}
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.write(data); 
        }
        res.end();
    });
   
})
server.listen(4000);