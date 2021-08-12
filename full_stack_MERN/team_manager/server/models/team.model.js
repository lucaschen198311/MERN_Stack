const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"], minlength: [2, "Name must be at least 2 characters long"]},
    position: {type: String, required: [true, "Position is required"] },
    status:{type: Array, default : ["Undecided", "Undecided", "Undecided"] }
}, { timestamps: true });
module.exports = mongoose.model('Team', TeamSchema);