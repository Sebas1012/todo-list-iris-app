import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export const getTasks = async (_req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await taskService.getTasks();
        res.status(200).json(tasks);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
    try {
        const task = await taskService.getTaskById(req.params.taskId);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
    const { title, tag, completed } = req.body;
    try {
        const task = await taskService.createTask(title, tag, completed);
        res.status(201).json(task);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedTask = await taskService.updateTask(req.params.taskId, req.body);
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await taskService.deleteTask(req.params.taskId);
        if (deleted) {
            res.status(200).json({ message: "Task deleted" });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const completeTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedTask = await taskService.completeTask(req.params.taskId, req.body.completed);
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

