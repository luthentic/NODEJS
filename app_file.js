const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
app.locals.pretty = true;  //  줄바꿈 
app.use(bodyParser.urlencoded({ extended: false }));

const _storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
let upload = multer({ storage: _storage });

app.use('/user',express.static('uploads'));

app.set('views', './views_file');
app.set('view engine', 'jade');

app.get('/upload',(req,res)=>{
  res.render('upload');
});
app.post('/upload', upload.single('avatar'), function (req, res, next) {
  res.send(req.file.filename);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.get('/topic/new',(req, res)=>{
  fs.readdir('data',(err,files)=>{
    if(err){
      console.log(err);
      res.status(500).send('SERVER ERROR');
    }
    res.render('new',{topics:files});
  });
});

app.get(['/topic','/topic/:id'],(req,res)=>{
  fs.readdir('data',(err,files)=>{
    if(err){
      console.log(err);
      res.status(500).send('SERVER ERROR');
    }
    let id = req.params.id;
    if(id){
    // id 
      fs.readFile('data/'+id,'utf8',(err,data)=>{
        if(err){
          console.log(err);
          res.status(500).send('SERVER ERROR');
        }
        res.render('view',{topics:files, title:id, des:data});
      });
    }else{// without id
      res.render('view',{topics:files, title:'WELCOME LEE', des:'HELLO LEEE NICE TO MEET YOU'});
    }
  });
});

app.post('/topic',(req,res)=>{
  let title = req.body.title;
  let des = req.body.description;
  fs.writeFile('data/' + title, des, (err)=>{
    if(err){
      console.log(err);
      res.status(500).send('INTERNAL SERVICE ERROR');
    }
    res.redirect('/topic/'+title);
  });
}); // npm body-parser 필요!!


app.listen(3002,(req,res)=>{
  console.log('LEE 3002 PORT');
});