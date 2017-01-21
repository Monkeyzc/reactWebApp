
const express = require('express')
const path = require('path')
const port = process.env.PORT || 8000
const app = express()

console.log(__dirname + '/public/index.html')

app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {

  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port)