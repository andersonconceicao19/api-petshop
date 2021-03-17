const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const NotSupported = require('./errors/notSupported');
const NotFound = require('./errors/NotFound');

const app = express();
app.use(bodyParser.json());

//Configurando o CORS
app.use((request, response, next) => {
    response.set('Access-Control-Allow-Origin', '*')
    /**
     * Onde tem o * fica o do dominio do site que deseja permitir.
     * No caso acima, consta que permite qualquer dominio
     */
    next();
})

const fornecedorRouter = require('./router/fornecedor');
app.use('/api/fornecedor', fornecedorRouter);

const produtosRouter = require('./router/produto');
app.use('/api/produto', produtosRouter);

app.use((error, request, response, next) => {
    let status = 200
    if (error instanceof NotSupported) {
        status = 406
    }
    if (error instanceof NotFound) {
        status = 404;
    }
    console.log(error)
    return response.status(status).json({
        message: error.message
    })

})


app.listen(config.get('api.port'), () => {
    console.log('servidor rodando na porta ', config.get('api.port'));
})