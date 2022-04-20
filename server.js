const express = require("express");
const app = express();
const appControllers = require('./app/appControllers');
const appServices = require('./app/appServices');

// app.use('/css', express.static(__dirname+'/node_modules/bootstrap/dist/css'))
app.use('/src', express.static(__dirname+'/src'));
app.set('view engine','ejs');

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/src/mainPage.html");
});

app.listen(3000);