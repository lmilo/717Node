const mongoose = require('mongoose');
require('dotenv').config();

<<<<<<< HEAD
const URI = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@${process.env.nombrecluster}/${process.env.nombreBD}` 
=======
const URI = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@${process.env.nombrecluster}.joo3k.mongodb.net/${process.env.nombreBD}` 
>>>>>>> a83a6763a3d70fd49beb497aaf606502a6877d4e
mongoose.connect(URI);

module.exports = mongoose;