var express = require('express');
var router = express.Router();

const Category_68 = require('../models/Category_68');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    let results = await Category_68.fetchAll();
    console.log('results', JSON.stringify(results));
  }catch(err){
    console.log(err);
  }

  res.render('crown2_68/index', { data: results, id: '409410668' , title: 'Crown2' });
});

module.exports = router;