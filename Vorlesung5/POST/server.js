const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((request, response) => {
    if (request.method === 'POST') {
        let body = '';
        request.on('data', (ipPackageData) => {
            body += ipPackageData.toString(); // convert Buffer to string
        });
        request.on('end', () => {
            console.log(parse(body));
            response.end('ok');
        });
    } else {
        response.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/" method="post">
                <input type="text" name="fname" /><br />
                <input type="number" name="age" /><br />
                <input type="file" name="photo" /><br />
                <button>Save</button>
            </form>
        </body>
        </html>
    `);
    }
});
server.listen(3000);
