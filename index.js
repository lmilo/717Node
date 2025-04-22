const exp = require('express');
require('dotenv').config();
const app = exp();
const enrutador = require('./routes/router');
const path = require('path')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/frontend/views"))
const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());

app.get("/", function(req,res){
    res.render("pages/index")    
})

app.use('/v1', enrutador);
app.listen(8000, ()=>{
    console.log('servidor en linea');
})
