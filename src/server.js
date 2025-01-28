const http = require('http');
const app = require('./app');

require('dotenv').config()

const { PORT } = process.env;

const server = http. createServer(app);

server.listen(PORT, 'localhost', () => {
    console.log(`Server běží na http://localhost:${PORT}...`)
});