class NotFound extends Error {
    constructor(){
        super('Não Encontrado')
        this.name = 'NotFound';
        this.idErro = 0;        
    }
}
module.exports = NotFound;