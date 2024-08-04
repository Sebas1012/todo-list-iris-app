import express, { Application } from 'express';
import sequelize from './config/dbConnection';
import taskRouter from './routes/taskRoutes';
import authRouter from './routes/authRoutes';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express();
app.use(express.json());

app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/auth', authRouter);


app.use((req, res, next) => {
    if (req.path === '/') {
        res.redirect('/api/v1/tasks');
    } else {
        next();
    }
});

sequelize.sync().then(() => {
    console.log('Database and table was created...');
});

export default app;