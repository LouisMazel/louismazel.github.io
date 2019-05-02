const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const { getSecret } = require('./config')
const usersRoute = require('./routes/users')
const contactsRoute = require('./routes/contacts')
const cors = require('cors')

mongoose.Promise = global.Promise

mongoose.connect(getSecret('dbUri'), { useNewUrlParser: true }).then(
	() => {
		console.log('Connected to mongoDB')
	},
	(err) => console.log('Error connecting to mongoDB', err)
)

const app = express()
const port = process.env.PORT || getSecret('serverport')

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
	origin: 'http://localhost:8080',
	credentials: true,
	exposedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'csrf-token']
}))
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, csrf-token")
//   res.header("Access-Control-Allow-Credentials", true)
//   next()
// });

usersRoute(app)
contactsRoute(app)

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

module.exports = { app }
