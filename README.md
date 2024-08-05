# Iris To Do App

El proyecto **Iris To Do App** es una aplicación de gestión de tareas dividida en dos partes principales:

1. **API**: Escrita en TypeScript usando Express, Sequelize y Swagger.
2. **Fontend**: Escrito usando Angular.

## Configuración de la API

La API está desarrollada en TypeScript y utiliza:

- **Express**: Framework para la creación del servidor.
- **Sequelize**: ORM para la gestión de la base de datos.

### Instalación en local:

1. Instalar dependencias:

   ```bash
   npm i
   ```
2. Compilar proyecto:

   ```bash
   npm run build
   ```
3. Correr servidor:

   ```bash
   npm run start
   
   # Tambien puedes correr el servidor omitiendo el paso anterior, con el comando
   npm run dev
   ```
   
**Nota**: Es importante que antes de correr el servidor tengas las siguientes variables de entorno configuradas en tu sistema o archivo `.env` en la raiz del proyecto.
   ```bash
   DB_NAME     = ""
   DB_USERNAME = ""
   DB_PASSWORD = ""
   DB_HOST     = ""
   SERVER_PORT = 
   JWT_SECRET  = ""
   ```



## Documentación Swagger
La documentación Swagger está disponible en la carpeta /api/docs. Puedes acceder a ella para obtener detalles sobre los endpoints disponibles, los parámetros requeridos y los tipos de respuesta.

## Despliegue
La API está desplegada en Vercel. Puedes acceder a la API a través de la URL [todo-list-api](https://todo-list-iris-app.vercel.app/api/v1/tasks).

## Uso
Para utilizar la API, realiza peticiones HTTP a los endpoints definidos en la documentación Swagger. La API permite realizar operaciones CRUD sobre las tareas de la aplicación. Tambien cuentas con la ayuda de un archivo `.http` ubicado en `/api`, el cual puedes usar en VScode con la extencion [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) y hacer las peticiones HTTP de manera facil y sencilla a los endpoints ya configurados en el archivo.



<p align="center">
  <b>Hecho con &#10084; por: Sebastián. </b>
</p>
