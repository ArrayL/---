const passport = require('passport');
const mongoose = require('mongoose');

const Words = new mongoose.Schema({
    word:String,
    passed: Array
}, { timestamps: true });

module.exports = mongoose.model("words", Words);