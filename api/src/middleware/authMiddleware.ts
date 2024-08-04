import { Request, Response, NextFunction } from 'express';
import { envs } from '../config/envs';
import jwt from 'jsonwebtoken';

const secretKey = envs.JWT_SECRET;

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            (req as any).user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
