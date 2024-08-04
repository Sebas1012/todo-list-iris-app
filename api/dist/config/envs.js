"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
const env_var_1 = require("env-var");
require("dotenv/config");
exports.envs = {
    DB_HOST: (0, env_var_1.get)('DB_HOST').required().asString(),
    DB_NAME: (0, env_var_1.get)('DB_NAME').required().asString(),
    DB_USERNAME: (0, env_var_1.get)('DB_USERNAME').required().asString(),
    DB_PASSWORD: (0, env_var_1.get)('DB_PASSWORD').required().asString(),
    SERVER_PORT: (0, env_var_1.get)('SERVER_PORT').required().asInt(),
    JWT_SECRET: (0, env_var_1.get)('JWT_SECRET').required().asString(),
};
//# sourceMappingURL=envs.js.map