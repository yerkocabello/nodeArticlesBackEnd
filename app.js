'use strict';

const mongoose = require('./config/db/mongo');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const restContenxt = '/api';

const ArticlesRoute = require('./routes/article');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(restContenxt, ArticlesRoute);

app.use((err, req, res, next) => {
    // log the error...
    console.log('global function');
})

mongoose
    .then(() => {
        console.log(`Connected to mongo database`);
        app.listen(3000, () => {
            console.log('Server has started');
        });
    })
    .catch(err => console.log(err));
