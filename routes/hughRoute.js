const express = require('express');
const HughTee = require('../models/Hugh.model');
const router = express.Router();

router.get('/about', (req, res, next) => {
  res.render('about.hbs', {
    style: ['about.css'],
  });
});

router.get('/works', (req, res, next) => {
  res.render('works.hbs', {
    style: ['works.css'],
  });
});

router.get('/photos', (req, res, next) => {
  res.render('photos.hbs', {
    style: ['photos.css'],
  });
});

//create a form for a free tee
router.post('/shop', (req, res, next) => {
  HughTee.create(req.body)
    .then((createdTee) => {
      console.log(createdTee);
      res.redirect('/shop/' + createdTee.id);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/shop', (req, res, next) => {
  res.render('form.hbs', {
    style: ['form.css'],
  });
});

//read one tee (created)
router.get('/shop/:id', (req, res, next) => {
  HughTee.findById(req.params._id)
    .then((dbRes) => {
      res.render('oneTee.hbs', {
        style: ['form.css'],
        hughTee: dbRes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//update the tee info
router.post('/shop/:id/update', (req, res, next) => {
  HughTee.findByIdAndUpdate(req.params._id, req.body)
    .then(() => {
      res.redirect('/shop/:id/update');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/shop/:id/update', (req, res, next) => {
  HughTee.findById(req.params._id)
    .then((dbRes) => {
      res.render('updateForm.hbs', {
        style: ['form.css'],
        hughTee: dbRes,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
