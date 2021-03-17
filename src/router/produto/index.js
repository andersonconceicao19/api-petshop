const route = require('express').Router();

route.get('/', async (request, response) => {
    response.status(200).json({
        data: 'hi, product!'
    })
})

module.exports = route;