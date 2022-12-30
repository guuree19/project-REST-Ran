const { Router } = require('express')

const router = require('express').Router()

// More code here in a moment
Router.length('/', () =>{
    res.send('GET/ places')
})

module.exports = router
