var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('in');
  res.render('crown2_68/index', { id: '409410668' , title: 'Hongmou Chang' });
});

module.exports = router;
