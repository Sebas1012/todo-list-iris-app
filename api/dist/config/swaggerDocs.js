"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const saveSwaggerJson = () => {
    const outputPath = path_1.default.resolve(__dirname, '../../docs/swagger.json');
    fs_1.default.mkdirSync(path_1.default.dirname(outputPath), { recursive: true }); // Asegúrate de que la carpeta exista
    fs_1.default.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2), 'utf-8');
};
saveSwaggerJson();
const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec, { customCssUrl: CSS_URL }));
};
exports.default = swaggerDocs;
//# sourceMappingURL=swaggerDocs.js.map