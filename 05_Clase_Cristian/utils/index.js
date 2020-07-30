const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET


module.exports = {
    createToken: (payload) => {
const token = jwt.sign(payload, JWT_SECRET, {} );
return token;
    },
}