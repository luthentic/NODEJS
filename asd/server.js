const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);

  //lodash
  const num = _.random(0,20)
  console.log(num);
  //set header
  res.setHeader('Content-Type','text/plain')

  let path = './views'
  switch(req.url){
    case '/':
      path +='index.html'
      res.statusCode = 200
      break
    case '/about':
      path +='about.html'
      res.statusCode = 200
      break
    case '/about-me':
      res.statusCode = 301
      res.setHeader('Location','/about')
      res.end()
    default:
      path +='404.html'
      res.statusCode = 404
      break
  }
  //send an html file
  fs.readFile('./views/index.html',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      
      res.end()
    }
  })
  
})



server.listen(11000,'local host',()=>{
  console.log('listening for lee');
})