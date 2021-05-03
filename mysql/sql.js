let mysql = require('mysql')

let con = mysql.createConnection({
  host: 'localhost',
  user: 'dltpdnd12345',
  password: 'password'
})

con.connect(err =>{
  if(err) throw err
  console.log('Connected');
})

