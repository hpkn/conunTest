const { Pool } = require('pg');


const pool_analysis = new Pool({
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
});



let connect = (sql, args) => {
    return new Promise((resolve, reject) => {
        // Ping database to check for common exception errors.
        pool_analysis.connect((err, connection, done) => {
            if (err) {
                console.log(err);
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    reject('Database connection was closed.')
                }
                if (err.code === 'ER_CON_COUNT_ERROR') {
                    reject('Database has too many connections.')
                }
                if (err.code === 'ECONNREFUSED') {
                    reject('Database connection was refused.')
                }
                return;
            }
            connection.query(sql, args, (error, rows) => {
                // When done with the connection, release it.
                connection.release();
                if (error) {
                    reject(error);
                } else {
                    resolve(rows || rows.rows);
                }
            })
        })
    })
};

module.exports = {
    connect
}