const express = require('express');
const { EApp, User, Friends,Exersies} = require('./model');

var app = new EApp();

const route = express.Router();

// function to get currently does get
route.get('/',function(req,res){
    res.send(app);
})

// post function for new user.
route.post('/users', function(req,res){
    const user = new User(req.body.name)

    app.Users.push(user);
    res.send(user);
});

//Function for adding data to the usesr exersise list currently not completed
route.post('/users/exersies',function(req,res){
      
     const exersie = new Exersies(req.body.exersises)
     User.exersisesList.push(exersie);
     res.send(exersie);
});


// post function for adding a new friend that data can be shared with.
route.post('/shareWith',function(req,res){
const share = new Friends(req.body.friend)

app.CanBeSharedWithFirends.push(share);
res.send(share);
});


module.exports = route;
