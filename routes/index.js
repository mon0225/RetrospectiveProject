const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('./moduls', (req, res, next) => {
  res.render('moduls');
});

module.exports = router;
