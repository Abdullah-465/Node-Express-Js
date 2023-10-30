const http = require('http');

// req and res are objects with bunch of cool properties.
// req is request from the user for Home page, about page, contact page and any page etc.
// res is response which we send to request.
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Here is our Home Page!!!');
    } else if (req.url === '/about') {
        res.end('Know about our history to get some extra.');
    } else {
        res.end(`
        <h1>Oops!!!</h1>
        <p>It seems the page is not found.</p>
        <a href="/">Back to the Home Page</a>
        `);
    }

});

server.listen(5000);
