// const Pool = require("pg").Pool;
// require("dotenv").config();

// const pool = new Pool({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: 5432,
//     ssl: true, // set to true if using SSL
// });

// postgres: module.exports = pool;


// const pool = new Pool({
//     user: "postgres",
//     password: "postgres",
//     host: "localhost",
//     port: 5432,
//     database: "hackerscorner",
// });


const { Pool } = require("pg");
const PgPool = require("pg-pool");
const renderDbUrl =
    "postgres://muthu:AvVSzY6036RYNpGMoG4AtWWyrClbWdvK@dpg-cg56g0ceoogsv95hkblg-a.oregon-postgres.render.com/hackerdb";
const pool = new PgPool({
    connectionString: renderDbUrl,
    ssl: {
        rejectUnauthorized: false, // Set to true in production
    },
});

module.exports = pool;



