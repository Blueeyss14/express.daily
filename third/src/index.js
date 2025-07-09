const express = require('express');
const dotenv = require('dotenv');
const usersRouter = require('./routes/users');
const apiKeyMiddleware = require('./middleware/apiKey');

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(apiKeyMiddleware);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
});

