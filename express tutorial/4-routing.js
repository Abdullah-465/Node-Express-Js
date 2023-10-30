const express = require('express')
const app = express()
const { products, people } = require('./express tutorial/3-data_json')

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Home Page</h1> <div><a href="/api/products">products</a></div>`)

})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { name, price, size } = product
        return { name, price, size }
    })

    res.status(200).json(newProducts)
})
app.get('/api/products/:id', (req, res) => {
    const requestedId = Number(req.params.id);

    // Filter products based on the requested ID and it returns an array 
    const matchedProducts = products.filter((product) => {
        return product.id === requestedId;
    });

    if (matchedProducts.length > 0) {
        // If products are found, return the matched product
        res.json(...matchedProducts)
    }
    else {
        res.send(`<h1>Product not found</h1>`);
    }
});
app.get('/api/v1/products/query', (req, res) => {
    console.log(req.query);
    const { search, id } = req.query;
    if (id) {
        const findItem = products.filter((prod) => {
            return prod.id == String(id)
        })
        res.json(...findItem)
    }
    else if (search) {
        const findItem = products.filter((prod) => {
            return prod.name.startsWith(search)
        })
        res.json(...findItem)
    }
    else if (search && id) {
        const findItem = products.filter((prod) => {
            return prod.name.startsWith(search) && prod.id == String(id)
        })
        res.json(...findItem)
    }
    else {
       notFound()
    }
    function notFound (){
        res.send(`<h1>Resource not found !!! </h1>`)
    }
})

app.listen(5000, () => {
    console.log('Server is listening to the port 5000....');
})
