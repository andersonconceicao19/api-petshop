const Sequelize = require('sequelize');
const connection = require('../../infra')

const column = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('brinquedos', 'racao'),
        allowNull: false
    }
}
const opt = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true
}

module.exports = connection.define('fornecedores', column, opt)