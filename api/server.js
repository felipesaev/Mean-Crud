// Arquivo : server.js
//descrição: Arquivo resposavel por toda configuração da aplicação ( back-End).
// Data: 03/02/2020.
// Autor: Felipe Costa.
//const express = require('express');
//const bodyParser = require ('body-parser');
//const mogoose = require( 'mongoose');
//const morgan = require('morgan');
//const cors = require('cors');
//const path = require('path');

//const app  = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(morgan('dev'));

app.use(cors());

const port = process.env.PORT || 8000;

//const router = express.Router();
//router.get('/', (req, res)=>{
//  res.json({message: 'Entrei aqui!'});
//  req.json({message: "Deu ruim"});
//});
app.use('/api', router);
app.listen(port);
console.log('Aplicação executando na porta', port);
