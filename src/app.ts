const http = require('http');

const HOST = 'localhost';
const PORT = 3000;

const SRP = require('./solid/1SRP');
const OCP = require('./solid/2OCP');
const LSP = require('./solid/3LSP');
const ISP = require('./solid/4ISP');
const DIP = require('./solid/5DIP');

http.createServer(null).listen(PORT, HOST, () => {
    console.log(SRP.run());
    console.log(OCP.run());
    console.log(LSP.run());
    console.log(ISP.run());
    console.log(DIP.run());
});