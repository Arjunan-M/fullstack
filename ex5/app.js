const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('./public/index.html', (err, data) => {
            if (err) {
                res.write("index.html not found");
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }

    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        req.on('data', chunk => body += chunk.toString());

        req.on('end', () => {
            const userData = body.split('=')[1] + '\n';

            fs.appendFile('data.txt', userData, () => {
                res.writeHead(302, {'Location': '/'});
                res.end();
            });
        });
    }

    if (req.method === 'GET' && req.url === '/view') {
        const readStream = fs.createReadStream('data.txt');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        readStream.pipe(res);
    }
});

server.listen(3000);
console.log("Server running at http://localhost:3000");
