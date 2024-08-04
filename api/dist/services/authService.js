"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.authenticateUser = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authModel_1 = __importDefault(require("../models/authModel"));
const envs_1 = require("../config/envs");
const secretKey = envs_1.envs.JWT_SECRET;
const generateAccessToken = (user) => {
    return jsonwebtoken_1.default.sign(user, secretKey, { expiresIn: '1h' });
};
exports.generateAccessToken = generateAccessToken;
const authenticateUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield authModel_1.default.findOne({ where: { username } });
    if (!user) {
        throw new Error('Invalid username or password');
    }
    const isValidPassword = yield authModel_1.default.comparePassword(password, user.password);
    if (!isValidPassword) {
        throw new Error('Invalid username or password');
    }
    return user;
});
exports.authenticateUser = authenticateUser;
const createUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield authModel_1.default.findOne({ where: { username } });
    if (existingUser) {
        throw new Error('Username already taken');
    }
    const newUser = yield authModel_1.default.create({ username, password });
    return newUser;
});
exports.createUser = createUser;
//# sourceMappingURL=authService.js.map