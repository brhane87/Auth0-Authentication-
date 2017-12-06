'use strict';
// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const bodyParser = require('body-parser');

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://brhane.auth0.com/.well-known/jwks.json"
    }),
    audience: 'daily-deals-api',
    issuer: "https://brhane.auth0.com/",
    algorithms: ['RS256']
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Public route
app.get('/api/deals/public', (req, res) => {
    let deals = [
        {
            id: 100,
            name: 'Galaxy Note',
            description: 'very nice phone',
            originalPrice: 2000,
            salePrice: 1500
        }, {
            'id': 101,
            'name': 'Macbook pro',
            'description': 'very nice PC',
            'originalPrice': 1500,
            'salePrice': 1000
        },
    ];
    res.json(deals);
})

// Private route 
app.get('/api/deals/private', jwtCheck, (req, res) => {
    let deals = [
        {
            'id': 102,
            'name': 'palystation',
            'description': 'very nice game',
            'originalPrice': 1000,
            'salePrice': 500
        },
        {
            'id': 103,
            'name': 'Iphone X',
            'description': 'very nice phone',
            'originalPrice': 1000,
            'salePrice': 750
        },
    ];
    res.json(deals);
})

app.listen(3001, () => {
    console.log('Serving deals on localhost:3001s');
});
