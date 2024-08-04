import { get } from "env-var";
import 'dotenv/config';

export const envs = {
    DB_HOST: get('DB_HOST').required().asString(),
    DB_NAME: get('DB_NAME').required().asString(),
    DB_USERNAME: get('DB_USERNAME').required().asString(),
    DB_PASSWORD: get('DB_PASSWORD').required().asString(),
    SERVER_PORT: get('SERVER_PORT').required().asInt(),
    JWT_SECRET: get('JWT_SECRET').required().asString(),
}