import { Module } from "@nestjs/common";
import { MaratonaController } from "./maratona.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Maratona } from "./maratona.entity";
import { MaratonaService } from "./maratona.service";

@Module({
    imports: [TypeOrmModule.forFeature([Maratona])],
    exports: [MaratonaService],
    controllers: [MaratonaController],
    providers: [MaratonaService]
})
export class MaratonaModule {}
