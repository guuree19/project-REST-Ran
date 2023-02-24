
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
// Post Route
router.post('/', (req, res) => {
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
        // console.log('validation reeor messages ', message)
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
  db.Place.findByIdAndDelete(req.params.id) //delete the place with specified id
    .then(() => {               //then
      res.redirect('/places') //redirect user back to the index page
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
// Put Routr
router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});





module.exports = router
