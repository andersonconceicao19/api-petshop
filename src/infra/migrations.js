const table = require('../router/fornecedor/fornecedor-model');

table.sync()
            .then(()=> console.log('de boa'))
            .catch(console.log)