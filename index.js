const exp = require('express');
require('dotenv').config();
<<<<<<< HEAD
const express = require('express');
=======
>>>>>>> a83a6763a3d70fd49beb497aaf606502a6877d4e
const app = exp();
const enrutador = require('./routes/router');
const path = require('path')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/frontend/views"))
<<<<<<< HEAD
app.use('/static', express.static(path.join(__dirname, 'frontend/static')));

=======
>>>>>>> a83a6763a3d70fd49beb497aaf606502a6877d4e
const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());

<<<<<<< HEAD

app.use('/v1/', enrutador);
=======
app.get("/", function(req,res){
    res.render("pages/index")    
})

app.use('/v1', enrutador);
>>>>>>> a83a6763a3d70fd49beb497aaf606502a6877d4e
app.listen(8000, ()=>{
    console.log('servidor en linea');
})
