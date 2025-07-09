module.exports = (req, res, next) => {
    const apiKey = req.query.api_key;
    const validKey = process.env.API_KEY;
    if (apiKey !== validKey) {
        return res.status(401).json({ error: 'Invalid or missing API key' });
    }
    next();
}; 