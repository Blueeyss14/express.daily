require('dotenv').config();
const express = require('express');
const { port } = require('./config/config');

const apiKeyMid = require('./middleware/apiKeys');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(apiKeyMid)

app.get('/', (req, res) => {
    res.status(200).send({message : 'ini pesan'});
});

app.listen(port, () => {
    console.log(`Jalan di ${PORT}`);
});