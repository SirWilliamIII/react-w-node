const express    = require('express'),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      logger     = require('morgan')

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())
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
