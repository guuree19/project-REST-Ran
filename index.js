// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// Create a homepage route.
app.get('/',  (req, res) =>{
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('Hello world')
})


app.listen(process.env.PORT, () =>{
console.log('I am awake')


})

