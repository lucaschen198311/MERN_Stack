const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {type: String, trim: true, required: [true, "Name is required"], minlength: [3, "Name must be at least 3 characters long"]},
    type: {type: String, trim: true, required: [true, "Type is required"], minlength: [3, "Type must be at least 3 characters long"]},
    description: {type: String, trim: true, required: [true, "Description is required"], minlength: [3, "Description must be at least 3 characters long"]},
    skill1:{type: String, trim: true, default : "" },
    skill2:{type: String, trim: true, default : "" },
    skill3:{type: String, trim: true, default : "" },
    likes: {type:Number, trim: true, default: 0}
}, { timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);