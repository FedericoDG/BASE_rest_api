const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }
  middlewares() {
    // Public folder
    this.app.use(express.static('public'));
    // Cors
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json())
  }
  routes() {
    this.app.use(this.usersPath, require('../routes/users.js'));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server live on:', this.port);
    });
  }
}

module.exports = Server;