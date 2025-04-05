const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const date = new Date();
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({
            date : date.toISOString()
        }));
    } else if (req.url === '/hello') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hello, World!");
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/')
});
