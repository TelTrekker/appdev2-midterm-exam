const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // res.statusCode = 200;
        // res.setHeader('Content-Type': 'application/json');
        res.writehead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({
            date : newDate().toISOString()
        }));
    } else if (req.url === '/hello') {

        res.writehead(200, {'Content-Type': 'text/plain'});
        res.end("Hello, World!");
    } else {
        res.writehead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
});

// const port = 3000;

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
});