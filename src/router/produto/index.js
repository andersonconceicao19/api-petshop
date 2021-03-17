const route = require('express').Router();
const NotFound = require('../../errors/NotFound');
const router = require('../fornecedor');
const _context = require('../produto/produto-model')

route.get('/', async (request, response) => {
    const products = await _context.findAll();
    response.status(200).json(products);
})


route.get('/:id', async (request, response) => {
    const { id } = request.params
     const products = await _context.findOne({
         where: { 
             id: id
         }
     });
    response.status(200).json(products);
})

route.post('/', async (request, response) => {
    const produto = request.body;
    console.log(produto)
    await _context.create(produto);
    return response.status(201).json(produto)

})
route.delete('/:id', async (request, response) => {
    const { id } = request.params
    const result = await _context.destroy({
        where: {
            id: id
        }
    })
    return response.status(204).end();
})
module.exports = route;