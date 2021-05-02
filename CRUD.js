var fs = require('fs')

// fs.readFile('index.html', (err,data)=>{
  //   res.writeHead(200,{'Content-Type' : 'text/html'})
  //   res.write(data)
  //   return res.end()
  // }) ---------------read file

  // fs.appendFile('newfile.txt','Hello WorldHello World', err =>{
  //   if (err) throw err
  //   console.log('SAVE')
  // }) --------------------create file  append file 

  // fs.open('newfile2.txt','w', err=>{
  //   if (err) throw err
  //   console.log('SAVE!!')
  // }) --------------------- create empty file
  
  // fs.writeFile('newfile3.txt', 'Heellopl23323', err =>{
  //   if (err) throw err
  //   console.log('SAVEEE')
  // }) ------------------------ create file and replce 

  // fs.writeFile('newfile.txt','THUS OPOPO', err =>{
  //   if(err) throw err
  //   console.log("SAVEW");
  // })  --------------------------- fs.appendFile() append fs.writeFile() update 

  // fs.unlink('newfile.txt',err =>{
  //   if(err) throw err
  //   console.log('Delete');
  // })  -------------------------------  delete

  // fs.rename('newfile2.txt','SEWOONG.txt',err =>{
  //   if(err) throw err
  //   console.log('RENAME');
  // }) ------------------------------rename

  let url = require('url')
  let adr = 'http://localhost:8080/default.htm?year=2017&month=february'
  let q = url.parse(adr,true)

  console.log(q.host);
  console.log(q.pathname);
  console.log(q.search);
  
  let qdate = q.query
  console.log(qdate.month);