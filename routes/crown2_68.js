var express = require('express');
var router = express.Router();

const Category_68 = require('../models/Category_68');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    let results = await Category_68.fetchAll();
    console.log('results', JSON.stringify(results));
    res.render('crown2_68/index',{
      data: results,
      id: '409410668',
      title: 'Crown2_DB'
    });
  }catch(err){
    console.log(err);
  }
});

router.get('/shop_68/:category',async function(req, res){
  console.log('category',req.params.category);

  try{
    const cid = await Category_68.fetchCatIdByName();
  }catch(err){
    console.log(err);
  }
});

module.exports = router;
