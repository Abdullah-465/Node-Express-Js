const express = require('express')
const app = express()
const auth = require('./express tutorial/9-auth')
const people = require('./express tutorial/8-people')

// static data
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())

app.use('/api/people',people)
app.use('/login',auth)




app.listen(5000, (req, res) => {
    console.log('Server is listening to the port 5000....');
})