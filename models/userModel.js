const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('usuario', userSchema);