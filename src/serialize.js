const NotSupported = require('./errors/notSupported')

class Serialize {
    json(data) {
        JSON.stringify(data)
    }
    serealizar(dados) {
        if(this.contentType === 'application/json')
        {
            return this.json(dados);
        }
        console.log(dados)
        throw new NotSupported();
    }
}
module.exports = Serialize;