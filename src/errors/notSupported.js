class NotSupported extends Error {
    constructor() {
        super("O tipo de conteudo, não é suportado");
        this.name = 'NotSupported';
        this.idErro = 1
    } 
}
module.exports = NotSupported