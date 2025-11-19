const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
   const url = req.url;

    switch(url) {
        case "/about":
            res.write('<h1>about us page<h1>');
            break;
        case "/contact":
            res.write('<h1>contact us page<h1>');
            break;
        default:
            res.write('<h1>Hello World!<h1>');
            res.write('<h2>My name Maks<h2>');
            break;
   }
   res.end();
});

server.listen(port, () => {
    console.log(`server start at http://localhost:${port}/`);
});