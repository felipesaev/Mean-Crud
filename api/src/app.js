// Arquivo: src/ app.js
//Desrição :
//data: 04/02/2020
//Autor: Felipe Costa

const express = require('express');
const bodyParser = require ('body-parser');
const mogoose = require( 'mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app  = express();
//  =====> Rotas

const index = require('./routes/index');
const funcionarioRoute = require('./routes/funcionarioRouter');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(morgan('dev'));
app.use(cors());

app.use('/api', index);
app.use('/funcionario', funcionarioRoute) ; // localhost:8000/api/funcionario/GET|PUT


module.exports = app;
