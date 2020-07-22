//Notas:
//-El Backend siempre escucha peticiones y evia respuestas.

const express = require('express') //Llamamos express
const app = express();  // Iniciamos express


//Estamos utilizando un middleware
//Explicación de middlewares
// Cliente(Postman) <------------------- Middleware ----------------> Servidor(Backend)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Creamos nuestro primer endpoint escuchando la ruta inicial '/'
app.get('/', function (request, response) {
    response.send('Hello world');
});

//CRUD 
app.post('/users', function (request, response) {
    response.status(200).send(request.body.email);
});

//CRUD (Update partial)
app.put('/users', function (request, response) {
    response.status(200).send(request.body.email);
});

//CRUD (Delete)
app.patch('/users', function (request, response) {
    response.status(200).send(request.body.email);
});

//Podemos recibir queries a traves de URL
app.delete('/users', function (request, response) {
    response.status(200).send(request.body.email);
});


app.get('/dogs?', function (req, res) {
    res.send(req.query.name);
});

app.get('/dogs:id', function (req, res) {
    res.send(req.params.id);
});

//Levantamos el servidor con el metodo listen
app.listen(3000, function (error) {
    if (!error) {
        console.info('Server on port 3000')
    } else {
        console.error(error)
    }
});

