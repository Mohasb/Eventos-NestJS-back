import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Clientes {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column({length: 50})
    nombre: string;

    @Column({length: 50})
    apellido: string;
    
    @Column({length: 50})
    nif: string;

    @Column({length: 2000})
    direccion: string;

    @Column()
    evento: number;
}
