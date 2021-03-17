const route = require('express').Router();
const _context = require('../produto/produto-model')

route.get('/', async (request, response) => {
    const products = await _context.findAll();
    response.status(200).json(products);
})

route.post('/', async (request, response) => {
    const produto = request.body;
    console.log(produto)
    await _context.create(produto);
    return response.status(201).json(produto)

})
module.exports = route;