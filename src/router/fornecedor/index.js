
const router =require('express').Router();

router.use('/', (request, response) => {
    response.send('hi, node!');
})

module.exports = router;