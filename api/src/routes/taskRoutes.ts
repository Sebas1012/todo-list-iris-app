import { getTasks, getTaskById, createTask, updateTask, deleteTask, completeTask } from '../controllers/taskController';
import { authenticateJWT } from '../middleware/authMiddleware';
import express from 'express';

const router = express.Router();

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
router.get('/', authenticateJWT, getTasks);

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
router.get('/:taskId', authenticateJWT, getTaskById);

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
router.post('/', authenticateJWT, createTask);

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
router.put('/:taskId', authenticateJWT, updateTask);

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
router.delete('/:taskId', authenticateJWT, deleteTask);

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
router.patch('/complete/:taskId', authenticateJWT, completeTask);

export default router;
