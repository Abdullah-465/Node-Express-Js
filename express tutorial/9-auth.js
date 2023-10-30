const express = require('express')
const router = express.Router()
// login
router.post('/', (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Hello ${name}`)
    }
    else {

        res.status(401).send('Please add Credentials 😔')
    }
})


module.exports = router