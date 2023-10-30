const express = require('express')
const router = express.Router()
const { people } = require('./3-data_json')

// /api/people
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
})
// post /api/people
router.post('/', (req, res) => {

    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: 'Please provide some name for successful requests' })
    }
    return res.status(200).json({ success: true, person: name })
})
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const newUseer = people.find((user) => user.id === Number(id))
    if (!newUseer) {
        return res.status(404).json({ success: false, message: 'Please provide valid id' })
    }
    else {
        const newPeople = people.map((peo) => {
            if (peo.id === Number(id)) {
                peo.name = name
            }
            return peo
        })
        return res.status(200).json({ success: true, person: newPeople })
    }
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const newUseer = people.filter((user) => user.id !== Number(id))
    if (newUseer.length !== 0) {
        return res.status(200).json({ success: true, person: newUseer })
    }
    else{
        
        return res.status(404).json({ success: false, message: 'Please provide valid id' })
    }
})

router.post('/postman', (req, res) => {

    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: 'Please provide some name for successful requests' })
    }
    return res.status(200).json({ success: true, data: [...people, name] })
})


module.exports = router