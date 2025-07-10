require('dotenv').config();

module.exports = {
    apiKey: process.env.API_COY,
    port: process.env.PORT || 3000,
}