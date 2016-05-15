var express = require ("express")
var app = express()
var fs = require ("fs")



app.use(express.static('.', {
    index: '../index.html'
}));

app.listen(3000)