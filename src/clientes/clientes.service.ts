import { Injectable, Inject, HttpServer } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from '../entities/cliente.entity';
import { InsertClienteDto } from './dto/insert-cliente.dto';
import { HTTP_SERVER_REF } from '@nestjs/core';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Clientes) private readonly clientRepo: Repository<Clientes>,
        @Inject(HTTP_SERVER_REF) private readonly httpServerRef: HttpServer,
    ) {}

    getClientes() {
        return this.clientRepo.find();
    }

    getCliente(id: number) {
        return this.clientRepo.findOne(id);
    }

    async addCliente(cliente: InsertClienteDto) {
        const resp = await this.clientRepo.insert(cliente);
        return await this.clientRepo.findOne(resp.identifiers[0]);
    }

    deleteCliente(id: number) {
        return this.clientRepo.delete(id);
    }
}
