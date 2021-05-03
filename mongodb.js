var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/swdb"

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  let abo = db.db('swdb')
  abo.createCollection('customers', (err,res) =>{
    if(err) throw err
    console.log("Database created!")
    db.close()
  })
})