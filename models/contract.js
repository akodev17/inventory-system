const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
    contractNumber: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    listProducts: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
});

module.exports = mongoose.model('Contract', contractSchema);
