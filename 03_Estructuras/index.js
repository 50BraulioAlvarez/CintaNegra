const { app, PORT } = require('./server')
require('./database')
const PORT = process.env.PORT || 3000


app.listen(PORT, (error) =>
    !error ? console.info(`Server on port ${PORT}`) : console.error(error)
);