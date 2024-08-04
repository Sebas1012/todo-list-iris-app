import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/dbConnection';

interface TaskAttributes {
    id: number;
    title: string;
    tag: string;
    completed: boolean;
};

interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}

class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes{
    public id!: number;
    public title!: string;
    public tag!: string;
    public completed!: boolean;
}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
{
    tableName: 'Tasks',
    sequelize
})

export default Task;