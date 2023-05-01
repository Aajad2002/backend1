const mongoose = require('mongoose');
const connection = mongoose.connect("mongodb+srv://aajadprajapat:kumar@cluster0.i8gpj4f.mongodb.net/eval?retryWrites=true&w=majority")
module.exports = connection