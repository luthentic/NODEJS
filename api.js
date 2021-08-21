const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.locals.pretty = true;
app.set('view engine','jade');
app.set('views','./views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

const server = app.listen(3001, () =>{
  console.log('Start SERVER: LOCAL LEE 3001');
});

app.get('/form',(req,res)=>{
  res.render('form');
});

app.get('/form_receiver',(req,res)=>{
  let title = req.query.title;
  let description = req.query.description;
  res.send(title+','+description);
});
app.post('/form_receiver',(req,res)=>{
  let title = req.body.title;
  let des = req.body.description;
  res.send(`${title},${des}`);
});

app.get('/template',(req,res)=>{
  res.render('temp',{time:Date()});
});

app.get('/topic/:id', (req,res) =>{
  let topics = [
    'LEE1',
    'Lee2',
    'LEE3',
  ];
  let output = `
    <a href="/topic?id=0">LEE1</a><br>
    <a href="/topic?id=1">LEE2</a><br>
    <a href="/topic?id=2">LEE3</a><br>
    ${topics[req.query.id]}
  `
  res.send(output);
});

app.get('/topic?:id',(req,res)=>{
  res.send(`${req.query.id}+${req.query.mode}`);
});

app.get('/', (req,res)=>{
  res.send(`<h1>LEEEE INDEX</h1>`);
})

