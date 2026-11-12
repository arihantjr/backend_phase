const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Requested URL:", req.url);

    if (req.url === '/') {
        res.end('HOME PAGE');
    } else if (req.url === '/about') {
        res.end('ABOUT PAGE');
    } else if (req.url === '/contact') {
        res.end('CONTACT PAGE');
    } else {
        res.end('404 NOT FOUND');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});