const express = require("express");
const cors = require("cors");
const { socketController } = require("../controllers/socket");
//const { dbConnection } = require("../db/config");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);
    this.paths = {
    
    };
    //conectar a bd
   // this.conectarDb();
    //Middlewares
    this.app.use(cors());
    //Parseo y lectura del body
    this.app.use(express.json());
    this.middlewares();
    //rutas de la app
    this.routes();
    //configuracion de sockets
    this.sockets();
  }
  /*async conectarDb() {
    await dbConnection();
  }*/
  routes() {
    //this.app.use(this.paths.authPath, authpath);
   
  }
  sockets(){
      this.io.on('connection',socketController)
  }
  listen() {
      console.log(`servidor corriendo en el puerto ${process.env.PORT}`)
    this.server.listen(this.port);
  }
  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));
  }
}
module.exports = Server;
