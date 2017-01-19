
const express = require('express')
const path = require('path')
const port = process.env.PORT || 8000
const app = express()

console.log(__dirname + '/build/index.html')

app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {

  res.sendFile(__dirname + '/build/index.html')
})

app.listen(port)