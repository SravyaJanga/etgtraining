const express=require('express');
const app=express();
const members=require('./Members');
const logger=(req,res,next)=>{
    //console.log('Hello');
    console.log(`${req.get('host')}${req.orginalUrl}`)
    next();
}
//to access the middleware
app.use(logger);
//get all members
app.get('/api/members',(req,res)=>{
    res.json(members);
});
const port = process.env.port || 5000;

app.listen(port, ()=>console.log(`server started ......`));
