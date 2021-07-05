const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/ping', (req, res) => {
    res.send('Hello World!');
});

app.get('/contact', (req, res) => {
    res.send(`
        <!doctype html>
        <html>
        <body>
            <form action="/contact" method="post">
                <input type="text" name="fname" /><br />
                <input type="number" name="age" /><br />
                <input type="file" name="photo" /><br />
                <button>Save</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
