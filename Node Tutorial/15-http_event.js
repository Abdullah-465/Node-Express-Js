const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('<h1> Welcome to Home Page!!! 😍</h1>')

    }
    else{
        res.end('<h1>Error Page 😕</h1>')
    }

})
// const server = http.createServer()
// server.on('response',(req,res)=>{
//     if (req.url=== '/') {
//         res.end('<h1> Welcome to Home Page!!! 😍</h1>')
//     }
//     else{
//         res.end('<h1> Error Page</h1>')
//     }
// })

server.listen(5000)