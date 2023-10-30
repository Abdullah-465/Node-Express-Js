const http = require('http')
const {readFileSync} = require('fs')

const home = readFileSync('./navbar-app/index.html')
const homestyle = readFileSync('./navbar-app/style.css')

const server = http.createServer((req,res)=>{
    // console.log(req.method);
    // console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(home)
        res.end()
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`
        <h1>About Page</h1>
        `)
        res.end()
    }
    //style.css
    else if(req.url === '/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homestyle)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write(`
        <h1>Page not found</h1>
        `)
        res.end()
    }
})

server.listen(5000)