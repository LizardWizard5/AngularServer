const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


//Create express app
const app = express()
app.use(bodyParser.json);

//db connection
mongoose.connect("mongodb+srv://eric:EricRocks12@examcluster.gpxztj8.mongodb.net/MyProject",{}).then((res) => { console.log('Connected to MongoDB') })
.catch((err) => { console.log(`Connection failure: ${err}`) });

//Controller + route
const classController = require('./controllers/class')
app.use('/v1/api/classes', classController)


app.listen(3001);

console.log("App.listen")
  

module.exports = app;

