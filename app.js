var express = require ("express")
var app = express()
var fs = require ("fs")



app.use(express.static('.'));

app.listen(3000)