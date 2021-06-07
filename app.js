const express = require('express')

const app = express()

app.listen(4001)

app.get('/',(req,res)=>{
  // res.send('<p>home page</p>')
  res.sendFile('./views/index.html',{root:__dirname})
})
app.get('/about',(req,res)=>{
  // res.send('<p>about page</p>')
})