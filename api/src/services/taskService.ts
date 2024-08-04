import Task from '../models/taskModel';

export const getTasks = async () => {
    return Task.findAll();
};

export const getTaskById = async (taskId: string) => {
    return Task.findByPk(taskId);
};

export const createTask = async (title: string, tag: string, completed: boolean) => {
    return Task.create({ title, tag, completed });
};

export const updateTask = async (taskId: string, updateData: Partial<{ title: string, tag: string, completed: boolean }>) => {
    const [updated] = await Task.update(updateData, { where: { id: taskId } });
    if (updated) {
        return Task.findByPk(taskId);
    }
    return null;
};

export const deleteTask = async (taskId: string) => {
    const deleted = await Task.destroy({ where: { id: taskId } });
    return deleted > 0;
};

export const completeTask = async (taskId: string, completed: boolean) => {
    const [updated] = await Task.update({ completed }, { where: { id: taskId } });
    if (updated) {
        return Task.findByPk(taskId);
    }
    return null;
};
