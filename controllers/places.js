
const { Router } = require('express')
const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

// index route

router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})



router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }

  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'validationError'){
      let message = "validation Error:"
      for (var field in err.errors){
        message += `${field} was ${err.errors[field].value}.` 
        message += ` ${err.errors[field].message}.`  
 
      }

//find all validation errors
      res.render('places/new', {message})

    }
    else {
      res.render('error404')
    }
      
  })
})


router.get('/new', (req, res) => {
  res.render('places/new')
})

// show route
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})



router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})





// router.delete('/:id', (req, res) => {
//   db.Place.findByIdAndDelete(req.params.id).then((place) => {
//     res.redirect("/places")
//   }).catch((err) => {console.log(err)
//   res.render("error404")})
//   }
// );
  


  

module.exports = router
