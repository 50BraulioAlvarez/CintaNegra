const express = require('express');
const app = require('express');
const router = express.Router();

router.get('/', (req,res) => res.status(200).send({ message: "Server on"}));


router.use(catsRoutes);

module.exports = router