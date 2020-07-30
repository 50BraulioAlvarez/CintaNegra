const { builtinModules } = require("module");
const jtw = require('jsonwebtoken')

//Cliente ----------> Middleware ---------> Backend(controller)
//

modules.exports = {
    validateToken: (req, res, next) => {
        try {
            if (!req.headers.authorization) res.status(403).send({ error: 'Necesitas un token para continuar' })
            const { authorization } = req.headers;
            const splitted = authorization.split(' ');
            if(splitted !== 'myapp') res.status(403).send({ error: 'Bearer no es correcto' })
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.decoded = decoded;
            next();
        } catch (error) {
            res.status(403).send({ error })
        }
    }
}