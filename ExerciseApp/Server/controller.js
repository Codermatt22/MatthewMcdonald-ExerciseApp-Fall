const express = require('express');
const { EApp, User} = require('./model');

var app = new EApp();

const route = express.Router();

route.get('/',function(req,res){
    res.send(app);
})

route.post('/Users',(req,res)=>{
const user = new User(req.body.name);
app.Users.push(user);
res.send(user);
});

module.exports = route;
