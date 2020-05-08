import { Logger, Module } from "@nestjs/common";
import { MaratonaSeederService } from "./maratona-seeder.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Maratona } from "../maratona/maratona.entity";
import { MaratonaModule } from "../maratona/maratona.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: "database.sqlite",
            entities: [Maratona],
            synchronize: true
        }),
        TypeOrmModule.forFeature([Maratona]),
        MaratonaModule
    ],
    providers: [MaratonaSeederService, Logger]
})
export class MaratonaSeederModule {}
