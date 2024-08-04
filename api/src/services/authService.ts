import jwt from 'jsonwebtoken';
import Auth from '../models/authModel';
import { envs } from '../config/envs';

const secretKey = envs.JWT_SECRET;

export const generateAccessToken = (user: any) => {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
};

export const authenticateUser = async (username: string, password: string) => {
    const user = await Auth.findOne({ where: { username } });
    if (!user) {
        throw new Error('Invalid username or password');
    }

    const isValidPassword = await Auth.comparePassword(password, user.password);

    if (!isValidPassword) {
        throw new Error('Invalid username or password');
    }

    return user;
};

export const createUser = async (username: string, password: string) => {
    const existingUser = await Auth.findOne({ where: { username } });
    if (existingUser) {
        throw new Error('Username already taken');
    }

    const newUser = await Auth.create({ username, password});
    return newUser;
};


