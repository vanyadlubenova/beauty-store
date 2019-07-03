const express = require("express")
const products = express.Router()


const Product = require("../models/Product")

products.get('/products', (req, res) => {
    Product.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
      });
})

products.put('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        product.quantity = req.body.quantity;
        product.save()
        res.json(product)
    }) 
})



module.exports = products