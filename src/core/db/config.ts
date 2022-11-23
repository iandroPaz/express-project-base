require('@babel/register');

import { database } from '../utils/constants';

module.exports = {
    username: database.user,
    port: 5432,
    database: database.database,
    host: database.host,
    dialect: 'postgres'
};