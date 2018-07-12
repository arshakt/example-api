const http = require('http');
const app = require('./app');
const server = http.createServer(app);

server.listen(3000);

server.on('listening', () => console.log('server started'));
server.on('error', (error) => console.log(error));
