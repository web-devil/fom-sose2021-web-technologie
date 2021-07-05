const http = require('http');
var path = require('path');
const filesystem = require('fs');

http.createServer((request, response) => {
    const { url, method } = request;
    console.log('Access-Log', method, url);

    const requestedFile = url.substr(1) || 'index.html';
    if (filesystem.existsSync(requestedFile)) {
        response.writeHead(200, { 'Content-Type': getMimeType(requestedFile) });
        response.end(filesystem.readFileSync(requestedFile));
        return;
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Page does not exist.');
    }
}).listen(80);

function getMimeType(filename) {
    const extension = path.extname(filename).substr(1);

    switch (extension) {
        case 'html':
            return 'text/html';
        case 'png':
            return 'image/png';
        default:
            return 'text/plain';
    }
}
