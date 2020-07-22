console.log('hello world');

const http = require('http');

const server = http.createServer((request, response) => {
    response.write('Hello There');
    response.end();
})
server.listen(3000);