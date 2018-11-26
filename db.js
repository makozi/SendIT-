const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('connected to the db');
});

/**
 * Create Tables
 */
const createTables = () => {
    const queryText =
    `CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        firstname VARCHAR(128) NOT NULL,
        lastname VARCHAR(128) NOT NULL,
        othernames VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        isAdmin VARCHAR(128) NOT NULL,
        registered TIMESTAMP,
        modifiedDate TIMESTAMP
      ),
      parcels(
        id UUID PRIMARY KEY,
        placedBy VARCHAR(128) NOT NULL,
        weight VARCHAR(128) NOT NULL,
        weightmetric VARCHAR(128) NOT NULL,
        status VARCHAR(128) NOT NULL,
        from VARCHAR(128) NOT NULL,
        to VARCHAR(128) NOT NULL,
        currentLocation VARCHAR(128) NOT NULL,
        sentOn TIMESTAMP,
        deliveredOn TIMESTAMP
        )`;

    pool.query(queryText)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

/**
 * Drop Tables
 */
const dropTables = () => {
    const queryText = 'DROP TABLE IF EXISTS users';
    pool.query(queryText)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});

module.exports = {
    createTables,
    dropTables
};

require('make-runnable');