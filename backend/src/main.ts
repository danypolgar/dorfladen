import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
var session = require('express-session');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    app.use(
        session({
            secret: 'secret',
            name: 'dorfladen',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 72000000
            }
        }),
    );
    app.enableCors({
        origin: ["http://localhost:8080"],
        credentials: true
    });


    await app.listen(3000);
}

 bootstrap();
