const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    contract: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contract',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    uniqueNumber: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Inventory', inventorySchema);
