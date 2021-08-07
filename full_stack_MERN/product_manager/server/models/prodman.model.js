const mongoose = require('mongoose');
const ProdManSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"] },
    price: { type: Number, required: [true, "Price is required"] },
    description: {type: String}
}, { timestamps: true });
module.exports = mongoose.model('ProdMan', ProdManSchema);