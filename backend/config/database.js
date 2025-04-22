const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@${process.env.nombrecluster}/${process.env.nombreBD}` 
mongoose.connect(URI);

module.exports = mongoose;