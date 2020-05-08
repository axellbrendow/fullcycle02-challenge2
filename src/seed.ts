import { NestFactory } from "@nestjs/core";
import { MaratonaSeederModule } from "./maratona-seeder/maratona-seeder.module";
import { MaratonaSeederService } from "./maratona-seeder/maratona-seeder.service";

async function bootstrap() {
    const appContext = await NestFactory.createApplicationContext(
        MaratonaSeederModule
    );
    const seeder = appContext.get(MaratonaSeederService);

    try {
        await seeder.seed();
    } catch (e) {
        console.error(e);
    }

    await appContext.close();
}
bootstrap();
