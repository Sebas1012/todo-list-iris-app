import { Request, Response } from 'express';
import { generateAccessToken, authenticateUser, createUser } from '../services/authService';

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await authenticateUser(username, password);
        const accessToken = generateAccessToken({ username: user.username, role: 'user' });
        res.json({ accessToken });
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const getUser = (req: Request, res: Response) => {
    res.json((req as any).user);
};

export const registerUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const newUser = await createUser(username, password);
        const accessToken = generateAccessToken({ username: newUser.username, role: 'user' });
        res.status(201).json({ accessToken });
    } catch (error) {
        res.status(400).send(error.message);
    }
};


