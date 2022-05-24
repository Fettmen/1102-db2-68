const Category_68 = require('../models/Category_68');
const Shop_68 = require('../models/Shop_68');

//CREATE
exports.createProducts = async (req,res) => {
    console.log('body',req.body);
    try{
      let results = await Shop_68.create(req.body);
      console.log('results',JSON.stringify(results));
      res.json({ 
        msg: 'create == body data receive',
        data: results,
      });
    }  catch(err){
      console.log('err',err);
    }
};

//READ
exports.getCategories = async (req,res) => {
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
};

exports.getProductsByCategory = async (req,res) => {
    console.log('category',req.params.category);

  try{
    const cid = await Category_68.fetchCatIdByName(req.params.category);
    //console.log('cid',cid);
    //const results = Shop_68.fetchProductsByCategory(cid);
    let results = await Shop_68.fetchProductsByCategory(cid);
    console.log('result',JSON.stringify(results));
    
    res.render('crown2_68/products_68',{
      data: results,
      title: req.params.category,
      name: 'Hongmou Chang',
      id: '409410668'
    });
  }catch(err){
    console.log(err);
  }
};

//DELETE
exports.deleteProduct = async (req,res) => {
  console.log('delete id',req.params.id);
  try{
    const results = await Shop_68.deleteById(req.params.id);
    res.json({
      msg: 'Deletion successful',
      data: results,
    });
  } catch(err){
    console.log(err);
  }
}