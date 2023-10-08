import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Evento {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column({length: 100})
    title: string;

    @Column({length: 2000})
    description: string;

    @Column({length: 100})
    image: string;

    @Column({type: 'decimal', default: 0, precision: 10, scale: 2})
    price: number;

    @Column({type: 'date'})
    date: Date;
}
