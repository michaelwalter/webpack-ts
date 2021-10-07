const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const path = require('path');
const axios = require('axios');
const sha1 = require('sha1');

const app = express();
const port = 3000;

require('dotenv').config();
if (process.env.NODE_ENV === 'development') {
    const config = require('../../webpack.dev.js');
    const compiler = webpack(config);

    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
        })
    );
}

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/add-contact', (req, res) => {
    const payload = {
        "clientId":"3u0o1xi181w5w4r0",
        "apiKey":"rg0hd700gc90vwylhxkric9i8su8y5db",
        "requestTime":1632744970819,
        "sha":"59072C45CB1BB454B6CABFEC64701EAE0EFBF513",
        "owner":"Michal.Paluch@grupawp.pl",
        "contact":{
            "email":"Michal.Walter@grupawp.pl"
        },
        "tags":[
            "API"
        ],
        "lang":"PL"
    }

    axios.post('https://pilot.salesmanago.pl/api/system/authorise', {
        userName: 'Michal.Paluch@grupawp.pl',
        password: '123GrupaWP123',
    }).then(response => {
        console.log('\nLogin response:');
        console.log(response);

        payload.sha = sha1(payload.apiKey + payload.clientId + response.data.token);

        console.log('\n');
        console.log('PAYLOAD TO API: ', payload);
        console.log('\n');

        axios.post('https://pilot.salesmanago.pl/api/contact/insert', payload, {
            headers: {
                'Authorization': `Bearer ${response.data.token}`
            }
        })
            .then(function (postResponse) {
                console.log(postResponse);
            })
            .catch(function (error) {
                console.log(error);
            });
    }).catch(response => {
        console.log('\nLogin failed:');
        console.log(response)
    });


    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
