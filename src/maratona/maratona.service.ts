import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Maratona } from "./maratona.entity";

@Injectable()
export class MaratonaService {
    constructor(
        @InjectRepository(Maratona)
        private maratonaRepository: Repository<Maratona>
    ) {}

    public find() {
        return this.maratonaRepository.find();
    }

    public create(maratona: Maratona) {
        return this.maratonaRepository.save(maratona);
    }
}
