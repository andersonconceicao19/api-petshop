const _context = require('./fornecedor-model')
const router = require('express').Router();
const NotSupported = require('../../errors/notSupported')

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
    if (!query) {
        return response.status(404).json({
            message: 'fornecedor não encontrado!'
        })
    }
    return response.status(200).json(query)
})

router.post('/', async (request, response, next) => {
    try {
        const fornecedor = request.body;
        await _context.create(fornecedor);
        return response.status(201).json({
            message: 'criado com sucesso'
        })

    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (request, response) => {
    const id = request.params.id
    const body = request.body
    const data = {
        nome: body.nome,
        email: body.email,
        categoria: body.categoria
    }

    const uptaded = await _context.update(
        data,
        {
            where: {
                id: id
            }
        }
    )
    return response.status(204).json(uptaded)

})

router.delete('/:id', async (request, response) => {
    const id = request.params.id
    await _context.destroy({
        where: {
            id: id
        }
    })
    return response.status(204).json({
        message: 'removido!'
    })
})
module.exports = router;