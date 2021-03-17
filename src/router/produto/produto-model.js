const Sequelize = require('sequelize')
const connection = require('../../infra')
const column = {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    fornecedorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {
            model: require('../fornecedor/fornecedor-model'),
            key: 'id'
        }
    }
}
const opt = {
    freezeTableName: true,
    tableName: 'produtos',
    timestamps: true
}

module.exports = connection.define('produtos', column, opt);