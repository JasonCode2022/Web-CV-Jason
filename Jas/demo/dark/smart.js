const express = require('express')
const app = express()
const path = require('path');
var cors = require('cors');


app.use(cors());
app.get('/index', function (req, res) {

  res.sendFile(path.join(__dirname, '/index.html/'));
  // console.log("ewwwwwwwww");
  console.log(__dirname)
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));