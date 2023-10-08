import { Injectable, Inject, HttpServer } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from '../entities/evento.entity';
import { ImageService } from '../commons/image/image.service';
import { InsertEventoDto } from './dto/insert-evento.dto';
import { HTTP_SERVER_REF } from '@nestjs/core';

@Injectable()
export class EventosService {
    constructor(
        @InjectRepository(Evento) private readonly eventRepo: Repository<Evento>,
        private readonly imageService: ImageService,
        @Inject(HTTP_SERVER_REF) private readonly httpServerRef: HttpServer,
    ) {}

    getEventos() {
        return this.eventRepo.find({order: {date: 'ASC'}});
    }

    getEvento(id: number) {
        return this.eventRepo.findOne(id);
    }

    async addEvento(evento: InsertEventoDto) {
        evento.image = await this.imageService.saveImage('eventos', evento.image);
        const resp = await this.eventRepo.insert(evento);
        return await this.eventRepo.findOne(resp.identifiers[0]);
    }

    deleteEvento(id: number) {
        return this.eventRepo.delete(id);
        
    }
}
