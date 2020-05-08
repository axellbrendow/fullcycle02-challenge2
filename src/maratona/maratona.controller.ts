import { Body, Controller, Get, Post, Req, Request } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Maratona } from "./maratona.entity";
import { Repository } from "typeorm";
import { MaratonaService } from "./maratona.service";

@Controller("maratona")
export class MaratonaController {
    constructor(private maratonaService: MaratonaService) {}

    @Get()
    public async index() {
        return await this.maratonaService.find();
    }

    @Post()
    public async create(@Body() maratona: Maratona) {
        return await this.maratonaService.create(maratona);
    }
}
