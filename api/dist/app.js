"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use('/api/v1/tasks', taskRoutes_1.default);
app.use('/api/v1/auth', authRoutes_1.default);
app.use((req, res, next) => {
    if (req.path === '/') {
        res.redirect('/api/v1/tasks');
    }
    else {
        next();
    }
});
dbConnection_1.default.sync().then(() => {
    console.log('Database and table was created...');
});
exports.default = app;
//# sourceMappingURL=app.js.map