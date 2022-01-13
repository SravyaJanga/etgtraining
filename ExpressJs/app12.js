const express = require('express');
const app = express();

const members=[
    {
        id:1,
        name: 'Sravya',
        email:'sravya@gmail.com',
        status:'active'
    },
    {
        id:2,
        name: 'Janga',
        email:'janga@gmail.com',
        status:'inactive'
    },
    {
        id:3,
        name: 'Rani',
        email:'rani@gmail.com',
        status:'active'
    },
];
//get all members
app.get('/api/members',(req,res)=>{
    res.json(members);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log('server started....'));