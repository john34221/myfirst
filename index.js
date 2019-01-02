//console.log("hiiii");

var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello ewewqeq')
})
app.post('/', function (req, res) {
  res.send('Hello post')
})
app.put('/', function (req, res) {
  res.send('Hello put')
})
app.delete('/', function (req, res) {
  res.send('Hello delete')
})
 
app.listen(3000)
