const fs = require('fs');
const readstream = fs.createReadStream("./blog.txt",{encoding: 'utf8'});
readstream.on('data',(chunk)=>{
    console.log(chunk);
    //console.log(chunk.toString());
})
const writestream = fs.createWriteStream("./new.txt");
// piping->read to write mode
readstream.pipe(writestream);