import knex from 'knex';

import dotenv from 'dotenv';
dotenv.config();

const connection = knex({
    client: 'postgresql',
    version: '12.4',
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
    useNullAsDefault: true
});

export default connection;