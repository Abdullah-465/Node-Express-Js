const http = require("http")

const server = http.createServer((req,res)=>{
    console.log('req event');
    res.end('hello world')
})

server.listen(5000,()=>{
    console.log('Server is listening to the port 5000...');
})