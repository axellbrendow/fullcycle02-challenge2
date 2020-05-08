import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MaratonaController } from "./maratona/maratona.controller";
import { MaratonaModule } from "./maratona/maratona.module";
import { Maratona } from "./maratona/maratona.entity";
import { MaratonaService } from "./maratona/maratona.service";
import { MaratonaSeederModule } from "./maratona-seeder/maratona-seeder.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: "database.sqlite",
            entities: [Maratona],
            synchronize: true
        }),
        MaratonaModule,
        MaratonaSeederModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
