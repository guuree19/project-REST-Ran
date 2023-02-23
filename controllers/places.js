
const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

// index route
router.get('/', (req, res) => {
  db.Place.find()
    .then(foundPlaces => {
      res.render('places/index', { places: foundPlaces })
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
      if (err && err.name == 'ValidationError') {
        let message = "Validation Error:"
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.` 
          message += ` ${err.errors[field].message}.`  
        }
        res.render('places/new', { message })
      } else {
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

// Delete Route
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})
// Edit Route
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});


// Put Route
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
  



module.exports = router
