"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const envs_1 = require("./config/envs");
const swaggerDocs_1 = __importDefault(require("./config/swaggerDocs"));
const PORT = envs_1.envs.SERVER_PORT;
(0, swaggerDocs_1.default)(app_1.default, PORT);
app_1.default.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map