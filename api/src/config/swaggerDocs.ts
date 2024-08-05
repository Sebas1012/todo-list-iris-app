import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import fs from 'fs';
import path from 'path';

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
  apis: ['src/routes/taskRoutes.ts', 'src/routes/authRoutes.ts'],
};

const swaggerSpec = swaggerJsdoc(options);


const saveSwaggerJson = () => {
  const outputPath = path.resolve(__dirname, '../../docs/swagger.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true }); // Asegúrate de que la carpeta exista
  fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2), 'utf-8');
};

saveSwaggerJson();

const swaggerDocs = (app: express.Application, port: number) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL }));
};

export default swaggerDocs;





