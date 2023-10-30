const fs = require('fs')
const http = require('http')

http.createServer((req,res)=>{
    // const text = readFileSync('./content/big.txt')
    // res.end(text)
    const stream = fs.createReadStream('./content/big.txt','utf8')
    stream.on('open',()=>{
        stream.pipe(res)
    })
    stream.on('error',(err)=> res.end(err))  
}).listen(5000)


