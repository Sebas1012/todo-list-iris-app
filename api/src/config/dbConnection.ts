import { Sequelize } from 'sequelize';
import { envs } from './envs';
import pg from 'pg';


const sequelize = new Sequelize(envs.DB_NAME, envs.DB_USERNAME, envs.DB_PASSWORD, {
    host: envs.DB_HOST,
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});

export default sequelize;