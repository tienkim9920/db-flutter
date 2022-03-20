const { Sequelize } = require('sequelize');

// const db = new Sequelize('postgres://tienkim:Tktk0909@postgresql-72781-0.cloudclusters.net:10659/ecommerce')

const db = new Sequelize('db-ecommerce', 'postgres', 'Tktk0909@', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = db