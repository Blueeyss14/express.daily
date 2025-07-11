const express = require('express');
require('dotenv').config();
const { port } = require('./config/config');
const userRouter = require('./routes/itemRoute');
const apiKeyMid = require('./middleware/apiKeys');

const app = express();

app.use(express.json());
app.use(apiKeyMid)
app.use('/items', userRouter)

app.get('/', (_, res) => {
    res.status(200).send({message : 'ini pesan'});
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Jalan di ${port}`);
});