const express = require("express");
const { json } = require("express/lib/response");
const app = express();
const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
var user_data;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/src', express.static(__dirname+'/src'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/src/mainPage.html");
});

app.post('/get_userData', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
      if (err) throw err;
      var dbo = db.db("AWP");
      dbo.collection("mini_project_db").findOne({userId: req.body.userId, userName: req.body.userName}, (err, result)=>{
        if (err) throw err;
        db.close();
        res.json(result);
      });
    });
});

app.post('/add_task', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
      if (err) throw err;
      var dbo = db.db("AWP");
      console.log(req.body);
      var query1 = { "userName": req.body.userName };
      var newValue = { "$push": { "tasks": req.body.newTask } };
      dbo.collection("mini_project_db").updateOne( query1, newValue,  (err, result)=>{
        if (err) throw err;
        console.log(result);
        db.close();
      });
    });
    res.send("done");
});

app.listen(3000);