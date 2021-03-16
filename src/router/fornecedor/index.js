const context = require('./fornecedor-model')
const router =require('express').Router();

router.use('/', (request, response) => {
    const result = context.findAll()
    return response.status(200).json(result);
})

module.exports = router;