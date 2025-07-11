const { apiKey: validKey } = require('../config/config');

/** 
 * @param {import('express').Request} req 
 *  @param {import('express').Response} res 
 *  @param {import('express').NextFunction} next 
 */

module.exports = (req, res, next) => {
    // const apiKey = req.query.api_key;
     const apiKey = req.headers['authorization'];

    if (apiKey !== validKey) {
        return res.status(401).json({ error: 'Invalid Api Key' });
    }
    next();
};
