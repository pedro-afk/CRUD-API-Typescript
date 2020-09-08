//import knex from 'knex';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

module.exports = {
    client: 'postgresql',
    version: '12.4',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },

    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    
    useNullAsDefault: true,
};