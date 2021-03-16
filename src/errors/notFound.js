class NotFound extends Error {
    constructor(){
        super('Não Encontrado')
        this.name = 'NotFound';
        this.idErro = 0;
        this.message = 'Não encontrado';        
    }
}
module.exports = NotFound;