const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    res.send('Hello World')
})

app.post('/', (req,res) =>{
    res.send('POST request sent to homepage')
})

app.listen(3000)