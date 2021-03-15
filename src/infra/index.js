const Sequelize = require('sequelize')
const config = require('config')
/**
 * Nome do banco
 * Nome do usuário de acesso
 * Pwd
 * 
 */
const sequelize = new Sequelize(
    config.get('mySql.database'),
    config.get('mySql.user'),
    config.get('mySql.pwd'),
    {
        host: config.get('mySql.host'),
        dialect: 'mysql'
    }
)

module.exports = sequelize;