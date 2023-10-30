const {people} = require('./3-data_json')

const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user) {
        const userFind = people.filter((obj)=>{
            return obj.name == user 
        })
        if (userFind.length>0) {
            req.user = {...userFind[0]}
            next()
        }
        else{

            res.status(401).send('User not found')
        }
    }
    else{
        res.status(401).send('Unauthorized')
    }

}

module.exports= authorize;