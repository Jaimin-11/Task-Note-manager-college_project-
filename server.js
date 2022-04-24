const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

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

app.post('/add_data', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
      if (err) throw err;
      var dbo = db.db("AWP");
      var query1 = {"userId": req.body.userId, "userName": req.body.userName };
      var newValue;
      if(req.body.type=="task"){
        newValue = { "$push": { "tasks": req.body.newData } };
      }
      else if(req.body.type=="note"){
          newValue = { "$push": { "notes": req.body.newData } };
        }
      dbo.collection("mini_project_db").updateOne( query1, newValue,  (err, result)=>{
        if (err) throw err;
        db.close();
      });
    });
    res.send("done");
});

app.post('/update_data', (req, res)=>{
  MongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbo = db.db("AWP");
    var query1;
    var newValue;
    if(req.body.type=="task"){
      query1 = {"userId": req.body.userId, "userName": req.body.userName, "tasks.title": req.body.title};
      newValue = { "$set": { "tasks.$": req.body.newData} };
    }
    else if(req.body.type=="note"){
      query1 = {"userId": req.body.userId, "userName": req.body.userName, "note.title": req.body.title};
      newValue = { "$set": { "notes.$": req.body.newData} };
    }
    dbo.collection("mini_project_db").updateOne( query1, newValue, (err, result)=>{
      if (err) throw err;
      db.close();
    });
  });
  res.send("done");
});

app.post('/mark_done', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
      if (err) throw err;
      var dbo = db.db("AWP");
      var query1 = {"userId": req.body.userId, "userName": req.body.userName, "tasks.title": req.body.title};
      var newValue = { "$set": { "tasks.$.isDone": true} };
      dbo.collection("mini_project_db").updateOne( query1, newValue, (err, result)=>{
        if (err) throw err;
        db.close();
      });
    });
    res.send("done");
});

app.post('/delete_data', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
      if (err) throw err;
      var dbo = db.db("AWP");
      var query1 = {"userId": req.body.userId, "userName": req.body.userName};
      var newValue;
      if(req.body.type=="task"){
        newValue = { "$pull": { "tasks": {"title":req.body.title}} };
      }
      else if(req.body.type=="note"){
        newValue = { "$pull": { "notes": {"title":req.body.title}} };
      }
      dbo.collection("mini_project_db").updateOne( query1, newValue, (err, result)=>{
        if (err) throw err;
        db.close();
      });
    });
    res.send("done");
});

app.listen(3000);