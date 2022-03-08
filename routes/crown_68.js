var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('in');
  res.render('crown_68/index', { id: '409410668' , name: 'Hongmou Chang' });
});

module.exports = router;
