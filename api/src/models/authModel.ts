import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/dbConnection';
import bcrypt from 'bcryptjs';

interface LoginAttributes {
    id: number;
    username: string;
    password: string;
}

interface LoginCreationAttributes extends Optional<LoginAttributes, 'id'> {}

class Auth extends Model<LoginAttributes, LoginCreationAttributes> implements LoginAttributes {
    public id!: number;
    public username!: string;
    public password!: string;

    static async hashPassword(password: string) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    static async comparePassword(password: string, hashedPassword: string) {
        return bcrypt.compare(password, hashedPassword);
    }
}

Auth.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},
{
    tableName: 'Auth',
    sequelize,
    hooks: {
        beforeCreate: async (user: Auth) => {
            user.password = await Auth.hashPassword(user.password);
        },
        beforeUpdate: async (user: Auth) => {
            if (user.changed('password')) {
                user.password = await Auth.hashPassword(user.password);
                console.log('Password hashed for beforeUpdate:', user.password);
            }
        }
    }
});

export default Auth;

