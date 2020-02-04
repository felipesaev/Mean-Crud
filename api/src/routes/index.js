// Arquivo: src/routes/index.js
//Descrição: Arquivo responsável pela chamada da API 'Funcionŕio' da aplicação.
// Data : 04/02/2020
// Autor: Felipe Costa

const express = require('express');

const router = express.Router();


router.get('/', (req, res)=>{
  res.status(200).send( {
    sucess:'true',
    message:'Seja bem vindo',
    version: '1.0.0'
  });
 });


module.exports = router;
