// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.write('Hello there');
//     response.end();
// });

// server.listen(3000);
const fs = require('fs');

fs.readFile('user-data.txt', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
});

fs.writeFile('user-data.txt', 'username=Max', err => {
    if(err) {
        console.log(err);
    } else {
        console.log('Wrote to file!');
    }
});