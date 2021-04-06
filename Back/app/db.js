const { Client } = require('pg');

const client = new Client({
    user: 'exercice'
});

client.connect();

module.exports = client;