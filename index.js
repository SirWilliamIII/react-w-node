const express    = require('express'),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      logger     = require('morgan')

const app = express()
const port = process.env.NODE || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())



app.use(function (req, res) {
	res.setHeader('Content-Type', 'text/json')
	res.write('you posted:\n')
	res.end(JSON.stringify(req.body, null, 2))
})



app.get('/', (req, res) => {
	res.send({ hi: 'there' })
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
