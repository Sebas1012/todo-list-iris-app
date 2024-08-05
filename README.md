# Iris To Do App
Este repositorio contiene el codigo fuente de las soluciones a los 2 componentes practicos de la prueba tecnica para el cargo de Dev Jr.

## Explicacion:
Este proyecto consta de 2 partes:
1. **API**: Se encuentra en la carpeta `/api` y esta construida usando TypeScript, Express, Sequalize y JWT, asi como tambien cuenta con su documentacion hecha en Swagger en la carpeta `/api/docs` la cual puede ser cargada y visualizada en [Swagger Editor](https://editor.swagger.io). Finalmente la API se encuentra desplegada en Vercel que como infraestructura usa el servicio de AWS Lambda para desplegar el codigo, la url base es [Todo List Iris API](https://todo-list-iris-app.vercel.app/api/v1/tasks).

   ⚠️**Nota**: Es posible que al intentar hacer una peticion pueda retornar un error `500` ya que cuando el servidor lleva sin un request por mucho tiempo se "suspende" para ahorrar recursos ya que uso una capa gratuita. La solucion es intentar nuevamente, y solo deberia tardar unos segundos en reestablecerse.

   Tambien es importante que todos los endpoints estan protegidos y para consumirsen requiere de una autenticacion de tipo `Bearer` cuyo token se genera consumiendo el endpoint `api/v1/auth/token` por medio de una peticion `POST`. El cuerpo de la solicitud debe ser:

   ```json
   {
    "username": "",
    "password": ""
   }
   ```

   Las credenciales estaran adjuntas en el correo donde se enviara esta prueba.

3. **Frontend**: Se encuentra en la carpeta `/web-app` y esta construido usando Angular 18. Tambien se encuentra desplegado en Vercel y puede accederse desde [Todo List Iris Web App](https://web-app-nine-olive.vercel.app).

   ⚠️**Nota:** Dado a que no me encontraba muy familiarizado con el framework, no pude terminar toda la prueba y agregar todas las funcionalidades que hubiese querido. En si el servicio si consume una API tipo mock usando el servicio Mock API y cuyo URL base es [Todo List Iris API Mock](https://66aec30bb05db47acc5842d7.mockapi.io/api/v1/tasks) ya que tuve algunos inconvenientes al usar mi API y la autenticacion que requeria. Asi que las funcionalidades con las que cuenta son muy basicas pero las suficientes para demostrar que con un poco mas de tiempo podria dominar el framework.

   Al igual que la nota anterior, tambien puede suceder el error `500` para el cual es la misma solucion.

## Utilidades:
Aparte de la coleccion de Postman para consumir los diferentes endpoints de la API, en la carpeta `/api/` se encuentra un archivo `.http` el cual puede ser usado junto a la extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) donde tambien se encuentran detallados los endpoints a consumir.

## Ejecutar de manera local:
En caso de que se requiera probar ambos servicios de manera local, adjunto los pasos a seguir para ambos:

1. **API**:
   ```bash
   # Instalar dependencias
   npm install

   # Compilar el proyecto
   npm run build

   # Correr proyecto
   npm run start

   # En caso de que no se desee compilar, se puede ejecutar en modo desarrollo
   npm run dev
   ```
3. **Frontend**:
   ```bash
   # En este caso ya se deberia contar con angular-cli para la ejecucion del mismo, en caso de que no se instala con el comando
   npm install -g @angular/cli

   # Instalar dependencias
   npm install

   # Finalmente solo deberia levantar el servidor con
   ng serve --o
   ```

## Notas Finales:
Finalmente agradezco la oportunidad y el confiar en mi, dandome la posibilidad de pertenecer al equipo. Me diverti realizando el proyecto he independiendtemente del resultado, agradeceria que me ayudasen con el feedback con respecto a mi rendimiento en la prueba.

<p align="center">
  <b>Hecho con &#10084; por: Sebastián. </b>
</p>
