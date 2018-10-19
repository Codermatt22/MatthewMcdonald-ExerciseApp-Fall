const express = require('express');
const Eapp = require('./controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/Eapp', Eapp);

app.listen(3000, () => console.log('Listening on port 3000...'));




