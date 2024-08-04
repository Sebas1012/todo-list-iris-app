import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Iris To Do API',
      version: '1.0.0',
      description: 'Documentación de Iris To Do API para prueba técnica',
    },
  },
  // apis: ['src/routes/taskRoutes.ts', 'src/routes/authRoutes.ts'],
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app: express.Application, port: number) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL }));
};

export default swaggerDocs;



