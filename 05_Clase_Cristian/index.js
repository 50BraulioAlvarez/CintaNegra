require('dotenv').config();
const {app, PORT} = require('./server');
require('./database');

app.listen(PORT, (err) => err ? console.error(err) : console.info(`Server on port ${PORT}`))

//https://forums.meteor.com/t/how-to-fix-the-bcrypt-error-in-windows-7/28856/2