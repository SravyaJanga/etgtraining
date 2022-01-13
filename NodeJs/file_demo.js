const fs = require('fs');
const path = require('path');

//create folder with async call back function
fs.mkdir(path.join(__dirname,'/test'),{},function(err){
    if(err)throw err;
    console.log('')
})

//create and write to file the folder name and file name should not exits
fs.writeFile(path.join(__dirname,'test','/hello.txt')
 ,'My test file contains'
 ,(err)=>{
     if(err) throw err;
     console.log('File Written to...');
 }
)


//read a file form the given path with async call
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf-8',(err,data)=>{
    if(err)throw err;
    console.log(data);
});