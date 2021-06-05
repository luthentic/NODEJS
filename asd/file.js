const fs = require('fs')

// fs.readFile('./newfile3.txt', (err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data.toString());
// })
// console.log('lEE');
// READ FILE -------------------------------------------------------------------------------------------------------

// fs.writeFile('./newfile3.txt','hello world',()=>{
//   console.log('file was written');
// })
// WRITE FILE -------------------------------------------------------------------------------------------------------
// if(!fs.existsSync('./assets')){
//   fs.mkdir('./assets',(err)=>{
//     if(err){
//       console.log(err);
//     }
//     console.log('Folder created');
//   })
// }else{
//   fs.rmdir('./assets',(err)=>{
//     if(err){
//       console.log(err);
//     }
//     console.log('folder deleted');
//   })
// } 
// CREATE FOLDER -------------------------------------------------------------------------------------------------------
if(fs.existsSync('./newfile3.txt')){
  fs.unlink('./newfile3.txt',(err)=>{
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  })
}
