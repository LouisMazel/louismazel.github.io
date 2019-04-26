var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config'),
    contactFormRoutes = require('./routes/contactFormRoutes')

mongoose.Promise = global.Promise
mongoose.connect(config.DBpath, { useNewUrlParser: true })
  .then(
    () => console.log('Database is connected'),
    err => console.log('Can not connect to the database'+ err)
  )

const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

app.use('/contact-form', contactFormRoutes)

const port = process.env.PORT || 4000

const server = app.listen(port, () => {
  console.log('Listening on port ' + port)
})