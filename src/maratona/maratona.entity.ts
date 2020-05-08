import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Maratona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    aula: string;
}
