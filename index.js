require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('nitindotcom')
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at chai</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur code! This is the first app to publish.</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})