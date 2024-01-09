import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: true,
	});

	const config = new DocumentBuilder().setTitle("Курсы по копирайтингу").build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("swagger", app, document);

	await app.listen(8080);
}
bootstrap();
