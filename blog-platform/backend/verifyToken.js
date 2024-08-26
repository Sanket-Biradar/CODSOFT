const jwt = require('jsonwebtoken');

const SecreteKey = 'sanketBiradar';

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json("You are not authenticated!");
    }

    jwt.verify(token, SecreteKey, (err, data) => { // Corrected: token is the first argument, secret key is second
        if (err) {
            return res.status(403).json("Token is not valid!");
        }

        req.userId = data._id; // Assuming _id is part of the token's payload
        next();
    });
}

module.exports = verifyToken;
