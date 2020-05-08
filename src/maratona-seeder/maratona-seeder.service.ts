import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Maratona } from "../maratona/maratona.entity";
import { MaratonaService } from "../maratona/maratona.service";

const marathonClasses = [
    { aula: "Full Cycle: Arquitetura e Estudo de Caso" },
    { aula: "Ecossistema JS com Diego da Rocketseat" },
    { aula: "Microsserviço Live Manager e Comunicação" },
    {
        aula: "Skills de um Dev Full Cycle com Rodrigo Branas e Henrique Bastos"
    },
    { aula: "Realizando Streaming com Websockets e WebRTC" },
    { aula: "Tempo Real na Web" },
    { aula: "Microsserviços de Chat e CodeBot" },
    { aula: "gRPC é o futuro" },
    { aula: "Deploy com Docker e Kubernetes" },
    { aula: "CI / CD e Tipos de Deploy" },
    { aula: "Dados do Chat com RabbitMQ e Elastic Stack" },
    { aula: "Kafka com Elastic Stack" },
    { aula: "Service Mesh com Istio e Kiali" },
    { aula: "Abertura das Matrículas" }
];

@Injectable()
export class MaratonaSeederService {
    constructor(
        @InjectRepository(Maratona)
        private maratonaRepository: Repository<Maratona>,
        private maratonaService: MaratonaService,
        private readonly logger: Logger,
    ) {}

    public async seed() {
        this.logger.debug("Starting seed ...");
        const promises = marathonClasses.map(marathonClass =>
            this.maratonaService.create(
                this.maratonaRepository.create(marathonClass)
            )
        );
        await Promise.all(promises);
        this.logger.debug("Finishing seed ... (OK)");
    }
}
