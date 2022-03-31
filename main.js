const express = require('express')
const app = express()

let logger = function(req, res, next){
  console.log(req)
    next()  
}

app.get('/', logger, (req,res) =>{
    res.json({"Response":"Hello World"})
})

app.get('/users/:userID/books/:bookID', (req, res) => {
    res.send(req.params)
})

app.post('/', (req,res) =>{
    res.send('POST request sent to homepage')
})

app.listen(3000)