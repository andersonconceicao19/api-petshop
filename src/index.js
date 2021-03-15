const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')

const app = express();
app.use(bodyParser.json());

const fornecedorRouter = require('./router/fornecedor')
app.use('/api/fornecedor', fornecedorRouter);

app.listen(config.get('api.port'), () => {
    console.log('servidor rodando na porta ', config.get('api.port'));
})