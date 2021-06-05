const fs = require('fs')

const readStream = fs.createReadStream('./asd/blog.txt',{encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./asd/blog2.txt')

// readStream.on('data',(chunk)=>{
//   console.log('-------New Chunk--------');
//   console.log(chunk);
//   writeStream.write('\nNEW CHUNK\n')
//   writeStream.write(chunk)
// })

readStream.pipe(writeStream)
//piping 