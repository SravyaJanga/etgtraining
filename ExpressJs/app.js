const express = require('express');
const app = express();
const path = require('path');

//use the file path of the node to get the html page loaded on to browser.
app.get('/',(req,res)=>{
    //Simple html page routed below
res.send('<h1>Welcome to Express JS!!!<h1>')

//sending the html file it self.
res.sendFile(path.join(__dirname,'public1','index.html'));

});
const port = process.env.port || 4000;
app.listen(port, ()=>console.log('server started on port ${port}'));
