const express = require('express')  
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./blog')

const app = express()
const dbURI = 'mongodb+srv://LeeUser:aa123456@cluster0.8kbcr.mongodb.net/node-tutor?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser:true,useUnifiedTopology:true})
  .then((result) => app.listen(4001))
  .catch((err) => console.log(err))
// view engine
app.set('view engine', 'ejs');

// app.use((req,res,next)=>{
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ',req.path);
//   console.log('method: ', req.method);
//   next()
// })
app.use(morgan('dev'))

app.get('/add-blog',(req,res)=>{
  const blog = new Blog({
    title: 'new blog1',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })
  blog.save()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err)
    })
})

app.get('/single-blog',(res,req)=>{
  Blog.find().sort({ createdAt: -1})
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err)
    })
})

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