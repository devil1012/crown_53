const { Pool } = require('pg')
const isProduction=process.env.NODE_KEY==='production';
let pool;
if(isProduction){
  pool=new ({
    connectionString:process.env.DATABASE_URL,
    ssl:{rejectUnauthorized:false},
  });
}else{
  pool=new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_53',
    password: '0000',
    port: 5432,
  })
}
module.exports = pool;
