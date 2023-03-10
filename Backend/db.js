const Pool = require("pg").Pool;
require("dotenv").config();

// const pool = new Pool({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: 5432,
//     ssl: true, // set to true if using SSL
// });

// postgres: module.exports = pool;


const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "hackerscorner",
});

module.exports = pool;
