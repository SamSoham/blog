const fs = require('fs');
const { unlink } = require('fs/promises');

// reading files
 fs.readFile("./blog.txt",(err,data)=>{
         if(err){
         console.log(err);
     }
     console.log(data.toString());
 });

// writing files
fs.writeFile("./blog.txt","I am from CSE",()=>{
    console.log("file written");
})
 // directories
 if(!fs.existsSync("./assets")){
 fs.mkdir("./assets",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("directory created")
 })}
 else {
    fs.rmdir("./assets",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("directory deleted")
     })
 }
 //deleting files
 if(fs.existsSync("./deleteme.txt")){
    fs.unlink("./deleteme.txt",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("deleted")
    })
 }