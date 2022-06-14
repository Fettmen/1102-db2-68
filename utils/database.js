const { Pool } = require('pg');
const { connectionString } = require('pg/lib/defaults')

const isProduction = process.env.NODE_ENV === 'production';

let pool;

if(isProduction) {
    pool = new Pool(
        {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        }
    );
}
else{
    pool = new Pool(
        { 
            user: 'postgres',
            host: 'localhost',
            port: '5432',
            database: 'crown2_68',
            password: '0000'
        }
    );
} 

module.exports = pool;

/* 

postgres://aljuwvrnwunbro:3e03339ae608f4ee8c1d2a0867be02696e29f5918949c1a1a533788f626f73d8@ec2-54-83-21-198.compute-1.amazonaws.com:5432/d8ve15c9c5oom1

user: aljuwvrnwunbro
host: ec2-54-83-21-198.compute-1.amazonaws.com
port: 5432
database: d8ve15c9c5oom1
password: 3e03339ae608f4ee8c1d2a0867be02696e29f5918949c1a1a533788f626f73d8

*/