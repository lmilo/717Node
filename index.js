const exp = require('express');
require('dotenv').config();
const express = require('express');
const app = exp();
const enrutador = require('./routes/router');
const path = require('path')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/frontend/views"))
app.use('/static', express.static(path.join(__dirname, 'frontend/static')));

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());


app.use('/v1/', enrutador);
app.listen(8000, ()=>{
    console.log('servidor en linea');
})
