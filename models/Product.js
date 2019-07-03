var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = new Schema({
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
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = Products = mongoose.model('products', ProductSchema);