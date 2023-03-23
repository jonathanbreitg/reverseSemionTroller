const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/logic.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/logic.js'));
})

app.get('/Monocraft.ttf', (req, res) => {
    res.sendFile(path.join(__dirname, '/Monocraft.ttf'));
})

app.get('/AmaticaSC-Regular.ttf', (req, res) => {
    res.sendFile(path.join(__dirname, '/AmaticaSC-Regular.ttf'));
})

app.get('/AmaticaSC-Bold.ttf', (req, res) => {
    res.sendFile(path.join(__dirname, '/AmaticaSC-Bold.ttf'));
})
app.get('/ding.mp3', (req, res) => {
    res.sendFile(path.join(__dirname, '/ding.mp3'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})