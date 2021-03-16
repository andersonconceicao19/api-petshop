const _context = require('./fornecedor-model')
const router = require('express').Router();

router.get('/', async (request, response) => {
    const result = await _context.findAll()
    return response.status(200).json({
        data: result
    });
})
router.get('/:id', async (request, response) => {
    const id = request.params.id

    const query = await _context.findOne({
        where: {
            id: id
        }
    })
    if(!query) {
        return response.status(404).json({
            message: 'fornecedor não encontrado!'
        })
    }
    return response.status(200).json(query)
})

router.post('/', async (request, response) => {    
    const fornecedor = request.body;
    await _context.create(fornecedor);
    return response.status(201).json({
        message: 'criado com sucesso'
    })

})

module.exports = router;