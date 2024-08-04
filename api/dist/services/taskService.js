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
exports.completeTask = exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getTasks = void 0;
const taskModel_1 = __importDefault(require("../models/taskModel"));
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    return taskModel_1.default.findAll();
});
exports.getTasks = getTasks;
const getTaskById = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    return taskModel_1.default.findByPk(taskId);
});
exports.getTaskById = getTaskById;
const createTask = (title, tag, completed) => __awaiter(void 0, void 0, void 0, function* () {
    return taskModel_1.default.create({ title, tag, completed });
});
exports.createTask = createTask;
const updateTask = (taskId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const [updated] = yield taskModel_1.default.update(updateData, { where: { id: taskId } });
    if (updated) {
        return taskModel_1.default.findByPk(taskId);
    }
    return null;
});
exports.updateTask = updateTask;
const deleteTask = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield taskModel_1.default.destroy({ where: { id: taskId } });
    return deleted > 0;
});
exports.deleteTask = deleteTask;
const completeTask = (taskId, completed) => __awaiter(void 0, void 0, void 0, function* () {
    const [updated] = yield taskModel_1.default.update({ completed }, { where: { id: taskId } });
    if (updated) {
        return taskModel_1.default.findByPk(taskId);
    }
    return null;
});
exports.completeTask = completeTask;
//# sourceMappingURL=taskService.js.map