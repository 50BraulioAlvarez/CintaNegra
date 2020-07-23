const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/suma', (request, response) => {
    let num1 = +req.app
    let num2 = 
    
    response.status(200).send(request)
});







app.listen(3000, function (error) {
    if (!error) {
        console.info('Server on port 3000')
    } else {
        console.error(error)
    }
});