const express = require('express');
const Eapp = require('./controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/Eapp', Eapp);

app.listen(3000, () => console.log('Listening on port 3000...'));

/*
app.get('/api/Users',(req,res)=>{
    res.send(Users);
})

app.post('/api/Users',(req,res)=>{
    const User = {
    
    name: Users.length + 1,
    name: req.body.name
    };
Users.push(User);
res.send(User)
});
*/ 

//app.get('/api/users/:names/:age',(req,res)=>{
    //res.send(req.params);
//})


