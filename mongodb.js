// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/swdb"

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err
//   let abo = db.db('swdb')
//   let swobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ]
//   abo.collection('customers').insertMany(swobj,(err,res) =>{
//     if(err) throw err
//     console.log("number of documents inserted!" + res.insertedCount)
//     db.close()
//   })
// })

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = [
//     { _id: 154, name: 'Chocolate Heaven'},
//     { _id: 155, name: 'Tasty Lemon'},
//     { _id: 156, name: 'Vanilla Dream'}
//   ];
//   dbo.collection("customers").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// }); 
//------------------------------find one --------------------------------------------

// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/"

// MongoClient.connect(url, (err, db)=>{
//   if (err) throw err
//   var dbo = db.db("swdb")
//   dbo.collection("customers").find({}).toArray((err, result)=>{
//     if (err) throw err
//     console.log(result)
//     db.close()
//   })
// }) 
//------------------------------- find all------------------------------------------

// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/"

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// }); 
//------------------projection otional 0 field is not showing--------------------------

// let a = require('mongodb').MongoClient
// let url = 'mongodb://localhost:27017/'

// a.connect(url,(err,db)=>{
//   if(err) throw err
//   let dbo = db.db('swdb')
//   let query = { address: /^S/ }
//   dbo.collection('customers').find(query).toArray( (err,result)=>{
//     if(err) throw err
//     console.log(result)
//     db.close()
//   })
//==================================== filter  ==================================


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("swdb");
//   var mysort = { name: 1 };
//   dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// }); 
//================== sort 1 ascending -1 descending ================================

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("swdb");
//   var myquery = { address: /^O/ };
//   dbo.collection("customers").deleteMany(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log(obj.result.n + "documents deleted");
//     db.close();
//   });
// }); 

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").drop(function(err, aaa) {
//     if (err) throw err;
//     if (aaa) console.log("Collection deleted");
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.dropCollection("customers", function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });
//==================================== drop table dropcollection  ==================================

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("swdb");
//   var myquery = { address: /^S/ };
//   var newvalues = {$set: {name: "Minnie"} };
//   dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log(res.result.nModified + " document(s) updated");
//     db.close();
//   });
// });
//==================================== update one specific and many  ==================================

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("swdb");
//   dbo.collection("customers").find().limit(5).toArray(function(err, a) {
//     if (err) throw err;
//     console.log(a);
//     db.close();
//   });
// });
//======================================= limit showing =====================================================


