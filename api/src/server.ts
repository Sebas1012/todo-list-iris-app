import app from './app';
import { envs } from './config/envs';
import swaggerDocs from './config/swaggerDocs';

const PORT = envs.SERVER_PORT;

swaggerDocs(app, PORT)

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});