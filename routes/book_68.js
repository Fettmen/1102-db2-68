var express = require('express');
var router = express.Router();

const db = require('../utils/database');

//CREATE
router.post('/create', async (req,res) => {
    console.log('body',req.body);
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price;

    try{
        const query = {
            text: `INSERT INTO book_68 (id, name, author, price) VALUES ($1,$2,$3,$4)`,
            values: [id,name,author,price],
        };
        await db.query(query);
        res.redirect('/book_68');
    }catch(error){
        console.log(error);
    }
});

//READ
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
    //console.log('error',error);
    res.render('book_68',{
        data: '',
        id: '409410668',
        name: 'Hongmou Chang'
    });
  }
});

router.get('/create',(req,res) => {
    res.render('book_68/add_68',{
            id: '409410668',
            name: 'Hongmou Chang',
        });
});

module.exports = router;