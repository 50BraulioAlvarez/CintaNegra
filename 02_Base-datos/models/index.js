const moongose = require('mongoose');
//Modelos -------------------------------> Base de datos
const User = require('./User')

const BD_URI = 


mongoose.connect(BD_URI, {useNewUrlParser: true, useUnifiedTopology: true }, (err) =>
err ? console.error(err) : console.info("Database connected")
);

module.exports = {
    User
}

