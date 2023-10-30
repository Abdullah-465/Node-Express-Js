const express = require('express')
const app = express()
const morgan = require('morgan')
const loggerMiddleWare = require('./express tutorial/5-logger')
const authorize = require('./express tutorial/6-middleware')

// req => middleware => res
// app.use([loggerMiddleWare, authorize])

app.use(morgan('dev'))

app.get('/', (req, res) => {
    // console.log(req.user);
    res.send('Home 😒')
})
app.get('/about', (req, res) => {
    res.send('About 🤔')
})
app.get('/api/products', (req, res) => {
    res.send('products 🤔')
})
app.get('/api/items', (req, res) => {
    res.send('items 🤔')
})

// server listening to the port
app.listen(5000, () => {
    console.log('Server is listening to the port 5000....');
})




