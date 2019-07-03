const express = require("express")
const checkouts = express.Router()


const Checkout = require("../models/Checkout")


checkouts.post('/checkout', (req, res) => {
    const checkoutData = {
        cart: req.body.cart,
        address: req.body.address,
        phone: req.body.phone,
    }

    Checkout.create(checkoutData)
    .then(checkout => {
        res.json({status: 'Successfull checkout!'})
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = checkouts