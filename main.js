const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
 
app.use(cors())

app.use(bodyParser.json())

app.listen(port)
