const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Title is required"] }
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);