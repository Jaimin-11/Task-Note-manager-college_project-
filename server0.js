// var MongoClient = require('mongodb').MongoClient;
// var http = require('http');
// var fs = require('fs');

// var url = "mongodb://localhost:27017/";

// var task_data;

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("AWP_mini_project");
//   dbo.collection("tasksData").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     task_data = result;
//     db.close();
//   });
// });

// http.createServer(function(req, res){
//   if(req.url == "/"){
//   }
//   else if(req.url == "/get_task"){
//     res.statusCode = 200;
//     var d = JSON.stringify(task_data); 
//     // change ACAO, to main url
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500zzzzz');
//     res.end(d);
//   }
//   else{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//   }
// }).listen(8080);