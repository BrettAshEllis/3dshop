const mysql = require("mysql")
const util = require("util")
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err);
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Database connection was closed???");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("DB connection limit has met it's cap")
        }
        if (err.code === "ECONNREFUSED") {
            console.error("You been baaaaanned brotha");
        }
    }
    if (connection) connection.release();
})

const query = util.promisify(pool.query).bind(pool);

module.exports = query;