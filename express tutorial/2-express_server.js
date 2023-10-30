const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the ./public directory
app.use(express.static('./public'));

// Home page
// app.get('/', (req, res) => {
//     // Use sendFile with the correct path relative to the root of the project
//     res.status(200).sendFile(path.resolve(__dirname, 'navbar-app', 'index.html'));
// });


// all other routes
app.get('*', (req, res) => {
    // Use sendFile with the correct path relative to the root of the project
    res.status(404).send(`<h1 style="text-align: center; margin-top: 50vh; transform: translateY(-50%);">Page not found🤕</h1>`);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000.....');
});
