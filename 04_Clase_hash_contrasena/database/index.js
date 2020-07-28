const mongoose = require('mongoose');
const DB_URI = ''

mongoose.connect(DB_URI, { useNewUrlParser: true,  useUnifiedTopology: true}, (error) => error ? console.error(error) : console.info('Database is coonnected'))