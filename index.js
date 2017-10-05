const express    = require('express'),
      bodyParser = require('body-parser'),
      logger     = require('morgan')

const app = express()
const port = 'https://immense-bayou-52620.herokuapp.com/'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use((req, res) => {
	res.end(JSON.stringify(req.body, null, 2))
})

// GET '/'
app.get('/', (req, res) => {
	res.send({ message: 'hello there' })
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
