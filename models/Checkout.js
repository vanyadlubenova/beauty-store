const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CheckoutSchema = new Schema({
    cart: [ 
        {
            id: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            info: {
                type: String,
                required: true
            },
            inCart: {
                type: Boolean,
                required: true
            },
            count: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            }
        }

    ],
    address: {
        type: String
    },
    phone: {
        type: String
    }

})

module.exports = Checkouts = mongoose.model('checkouts', CheckoutSchema);