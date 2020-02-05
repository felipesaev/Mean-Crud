// Arquivo : server.js
//descrição: Arquivo resposavel por toda configuração da aplicação ( back-End).
// Data: 03/02/2020.
// Autor: Felipe Costa.


// Exemplo usando o SOLID

const app = require('./src/app');
const port = process.env.PORT || 8000;

app.listen(port);

console.log('Aplicação executando na porta', port);

