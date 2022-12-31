
require('dotenv').config() 
// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// defines the view engine (JSX in this case) 
app.set('view engine' , 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))
// Create a homepage route.
app.get('/',  (req, res) =>{
    // This gets sent to the client 
    // (your web browser most likely!)
    res.render('home')
})

app.get('*',  (req, res) =>{
    // This gets sent to the client 
    // (your web browser most likely!)
    res.status(404).send('<h1> 404 page</h1>')
})


app.listen(process.env.PORT, () =>{
console.log('I am awake')


})

