"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: [
                "http://localhost:8080",
                "http://localhost:3000",
            ],
            credentials: true
        }
    });
    app.use(cookieParser());
    await app.listen(process.env.PORT || 3000);
}
void bootstrap();
//# sourceMappingURL=main.js.map