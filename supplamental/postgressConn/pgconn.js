// 1st npm install pg --save

const PoolClass = require('pg').Pool
const pool = new PoolClass({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432
})

pool.query('SELECT * FROM users', (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows)
    }
})