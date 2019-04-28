var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    contactFormRoutes = require('./routes/contactFormRoutes')

const { dev, production } = require('./config')
mongoose.Promise = global.Promise
mongoose.connect(process.env.NODE_ENV === 'production' ? production : dev, { useNewUrlParser: true })
  .then(
    () => console.log(`Database is connected ${process.env.NODE_ENV === 'production' ? 'prod' : 'dev'}`),
    err => console.log(`Can not connect to the database ${err}`)
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