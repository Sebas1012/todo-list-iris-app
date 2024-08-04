"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const envs_1 = require("./envs");
const pg_1 = __importDefault(require("pg"));
const sequelize = new sequelize_1.Sequelize(envs_1.envs.DB_NAME, envs_1.envs.DB_USERNAME, envs_1.envs.DB_PASSWORD, {
    host: envs_1.envs.DB_HOST,
    dialect: 'postgres',
    dialectModule: pg_1.default,
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});
exports.default = sequelize;
//# sourceMappingURL=dbConnection.js.map