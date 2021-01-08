// Servidor de Express
const express = require('express');

// Servidor de sockets
const http = require('http');

// Configuracion de Socket Server
const socketIO = require('socket.io');

const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');


class Server {
    
    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // HTTP server
        this.server = http.createServer(this.app);

        this.io = socketIO(this.server);



    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ));

        // CORS
        this.app.use(cors());
    }

    configurarSockets() {
        new Sockets(this.io);
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar Sockets
        this.configurarSockets();

        // Inicializar server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto:', this.port);
        });

    }

}

module.exports = Server;