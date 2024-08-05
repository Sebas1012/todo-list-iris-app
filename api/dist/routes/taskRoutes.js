"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskController_1 = require("../controllers/taskController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * @swagger
 * /tasks:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Obtiene una lista de tareas
 *     description: Recupera todas las tareas almacenadas en el sistema.
 *     security:
 *       - bearerAuth: []  # Autenticación JWT
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la tarea
 *                   title:
 *                     type: string
 *                     description: Título de la tarea
 *                   tag:
 *                     type: string
 *                     description: Etiqueta de la tarea
 *                   completed:
 *                     type: boolean
 *                     description: Estado de la tarea (completada o no)
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */
router.get('/', authMiddleware_1.authenticateJWT, taskController_1.getTasks);
/**
 * @swagger
 * /tasks/{taskId}:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Obtiene una tarea por su ID
 *     description: Recupera los detalles de una tarea específica utilizando su ID.
 *     security:
 *       - bearerAuth: []  # Autenticación JWT
 *     parameters:
 *       - name: taskId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Detalles de la tarea obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la tarea
 *                 title:
 *                   type: string
 *                   description: Título de la tarea
 *                 tag:
 *                   type: string
 *                   description: Etiqueta de la tarea
 *                 completed:
 *                   type: boolean
 *                   description: Estado de la tarea (completada o no)
 *                 required:
 *                   - title
 *                   - tag
 *                   - completed
 *       404:
 *         description: Tarea no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */
router.get('/:taskId', authMiddleware_1.authenticateJWT, taskController_1.getTaskById);
/**
 * @swagger
 * /tasks:
 *   post:
 *     tags:
 *       - Tasks
 *     summary: Crea una nueva tarea
 *     description: Crea una nueva tarea proporcionando los detalles de la tarea en formato JSON.
 *     security:
 *       - bearerAuth: []  # Autenticación JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la tarea
 *               tag:
 *                 type: string
 *                 description: Etiqueta de la tarea
 *               completed:
 *                 type: boolean
 *                 description: Estado de la tarea (completada o no)
 *             required:
 *               - title
 *               - tag
 *               - completed
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la tarea creada
 *                 title:
 *                   type: string
 *                   description: Título de la tarea
 *                 tag:
 *                   type: string
 *                   description: Etiqueta de la tarea
 *                 completed:
 *                   type: boolean
 *                   description: Estado de la tarea (completada o no)
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha y hora de creación de la tarea
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha y hora de la última actualización de la tarea
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */
router.post('/', authMiddleware_1.authenticateJWT, taskController_1.createTask);
/**
 * @swagger
 * /tasks/{taskId}:
 *   put:
 *     tags:
 *       - Tasks
 *     summary: Actualiza una tarea existente
 *     description: Actualiza los detalles de una tarea existente utilizando su ID.
 *     security:
 *       - bearerAuth: []  # Autenticación JWT
 *     parameters:
 *       - name: taskId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la tarea
 *               tag:
 *                 type: string
 *                 description: Etiqueta de la tarea
 *               completed:
 *                 type: boolean
 *                 description: Estado de la tarea (completada o no)
 *             required:
 *               - title
 *               - tag
 *               - completed
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la tarea
 *                 title:
 *                   type: string
 *                   description: Título de la tarea
 *                 tag:
 *                   type: string
 *                   description: Etiqueta de la tarea
 *                 completed:
 *                   type: boolean
 *                   description: Estado de la tarea (completada o no)
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha y hora de creación de la tarea
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha y hora de la última actualización de la tarea
 *       404:
 *         description: Tarea no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */
router.put('/:taskId', authMiddleware_1.authenticateJWT, taskController_1.updateTask);
/**
 * @swagger
 * /tasks/{taskId}:
 *   delete:
 *     tags:
 *       - Tasks
 *     summary: Elimina una tarea por su ID
 *     description: Elimina una tarea específica utilizando su ID.
 *     security:
 *       - bearerAuth: []  # Autenticación JWT
 *     parameters:
 *       - name: taskId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación
 *       404:
 *         description: Tarea no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */
router.delete('/:taskId', authMiddleware_1.authenticateJWT, taskController_1.deleteTask);
/**
 * @swagger
 * /tasks/complete/{taskId}:
 *   patch:
 *     tags:
 *       - Tasks
 *     summary: Marca una tarea como completada
 *     description: Actualiza el estado de una tarea a completada utilizando su ID.
 *     security:
 *       - bearerAuth: []  # Autenticación JWT
 *     parameters:
 *       - name: taskId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               completed:
 *                 type: boolean
 *                 description: Estado de la tarea (completada o no)
 *             required:
 *               - completed
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la tarea
 *                 title:
 *                   type: string
 *                   description: Título de la tarea
 *                 tag:
 *                   type: string
 *                   description: Etiqueta de la tarea
 *                 completed:
 *                   type: boolean
 *                   description: Estado de la tarea (completada o no)
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha y hora de creación de la tarea
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha y hora de la última actualización de la tarea
 *       404:
 *         description: Tarea no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */
router.patch('/complete/:taskId', authMiddleware_1.authenticateJWT, taskController_1.completeTask);
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map