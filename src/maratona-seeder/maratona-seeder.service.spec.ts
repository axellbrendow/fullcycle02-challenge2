import { Test, TestingModule } from "@nestjs/testing";
import { MaratonaSeederService } from "./maratona-seeder.service";

describe("MaratonaSeederService", () => {
    let service: MaratonaSeederService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MaratonaSeederService]
        }).compile();

        service = module.get<MaratonaSeederService>(MaratonaSeederService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
