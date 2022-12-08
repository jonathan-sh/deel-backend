import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
});

const closeDbConnection = () => sequelize.close();

export { sequelize, closeDbConnection };
