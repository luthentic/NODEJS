const express = require('express')

const app = express()

app.listen(4001)

// view engine
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  // res.send('<p>home page</p>')
  // res.sendFile('./views/index.html',{root:__dirname})
  const blogs =[
    {title:'LEE1', snippet:'LEEEEEEE1'},
    {title:'LEE2', snippet:'LEEEEEEE2'},
    {title:'LEE3', snippet:'LEEEEEEE3'},
  ]
  res.render('index',{ title:'Home', blogs:blogs})
})
app.get('/about',(req,res)=>{
  // res.send('<p>about page</p>')
  // res.sendFile('./views/about.html',{root:__dirname})
  res.render('about')
})

app.get('/about-us',(req,res)=>{
  res.redirect('/about')
})

app.get('/blogs/create',(res,req)=>{
  res.render('create')
})

app.use((res,req)=>{
  // res.sendFile('./views/404.html',{root:__dirname})
  res.status(404).render('404')
}) // must be bottom 