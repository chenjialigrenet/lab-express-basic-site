const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('home.hbs', {
    style: ['home.css'],
  });
});

module.exports = router;
