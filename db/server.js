const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Configuring the database
const config = require('./config')
const mongoose = require('mongoose')

require('./routes/contacts.js')(app)

mongoose.Promise = global.Promise

// Connecting to the database
const url = config.url[process.env.NODE_ENV === 'production' ? 'production' : 'development']
mongoose.connect(url, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to the database'))
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
  })

// default route
app.listen(config.serverport, () => {
    console.log('Server is listening on port 4000')
})