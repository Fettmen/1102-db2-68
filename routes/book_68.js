var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET home page. */
router.get('/', async (req, res) => {
  try{
    const results = await db.query(`SELECT * FROM book_68`);
    console.log('results',JSON.stringify(results.rows));
    res.render('book_68/index', { 
        data: results.rows,
        id: '409410668',
        name: 'Hongmou Chang', 
    });
  }catch(error){
    console.log('error',error);
  }
});

module.exports = router;