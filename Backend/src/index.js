const express = require('express');

const server = require('./config/express');

const app = express();


//requiero la conección a la base de datos
require("./database.js");
//requiero la autenticacion de passport
require('./controllers/auth.controllers');



//init express
server.start(app);

//routes
const router = express.Router();

const routes = require('./routes/index');
routes(router);

app.use("/api", router);

//Server is listening
app.listen(app.get('port'), () => {

  console.log("server on port " + app.get('port'));
});
