const path = require('path')

//Base file name
console.log(__filename);

//base file name with just path
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Concatenate paths
console.log(path.join(__dirname,'test','hello.html'));
