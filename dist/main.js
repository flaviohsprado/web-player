"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
const exception_filter_1 = require("./main/filters/exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 3000;
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: '*',
        methods: 'GET,PUT,POST,DELETE',
        optionsSuccessStatus: 200,
    });
    app.use(helmet());
    app.useGlobalFilters(new exception_filter_1.AllExceptionsFilter());
    await app.startAllMicroservices();
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map