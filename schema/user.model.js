const Sequelize = require('sequelize')
const db = require('../config/database')
const Permission = require('./permission.model')

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    fullname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    score: {
        type: Sequelize.STRING
    },
    permissionId: {
        type: Sequelize.INTEGER
    }
})

Permission.hasMany(User, { foreignKey: 'permissionId' })
User.belongsTo(Permission);

// User.sync().then(() => {
//     console.log('table created');
// });

module.exports = User;

