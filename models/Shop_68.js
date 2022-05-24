const db = require('../utils/database');

const Shop_68 = class Shop_68{

    constructor(id, name, cat_id, price, remote_url, local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    //CREATE
    static async create(body){
        console.log('create body',body);
        const {id,name,cat_id,price,remote_url,local_url} = body;
        const queryStr = {
            text: `INSERT INTO shop_68 (id,name,cat_id,price,remote_url,local_url) VALUES ($1, $2, $3, $4, $5, $6)`,
            values: [id,name,cat_id,price,remote_url,local_url],
        };
        return db.query(queryStr);
    }

    //READ
    static async fetchAll() {
        try{
            let results = await db.query(`SELECT * from shop_68`);
            return results.rows;
        } catch(err){
            console.log('error', err);
        }
    }
    
    static async fetchProductsByCategory(id) {
        const query = {
            text: `SELECT * from shop_68 where cat_id = $1`,
            values: [id]
        }
        try{
            let results = await db.query(query);
            return results.rows;
        }catch(err){
            console.log(err);
        }
    }
}


/*testing
const test = async () => {
    let results = await Shop_68.fetchProductsByCategory(1);
    console.log('test results', JSON.stringify(results));
}

test(); */

module.exports = Shop_68;