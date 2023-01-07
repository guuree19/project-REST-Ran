
// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()
require('dotenv').config() 

// defined the view engine (JSX in this case) 
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))
// Create a homepage route.
app.get('/',  (req, res) =>{
    // This gets sent to the client 
    res.render('home')
})

app.get('*',  (req, res) =>{
    // This gets sent to the client 
    res.render('error404')
})


app.listen(process.env.PORT, () =>{
console.log('I am awake')


})

