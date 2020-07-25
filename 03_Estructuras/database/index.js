const mongoose = require("mongoose");
const BD_URI = ""

mongoose.connect(BD_URI, {useNewUrlParser: true, useUnifiedTopology: true }, (err) =>
err ? console.error(err) : console.info("Database connected")
);

module.exports 