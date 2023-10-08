import { HttpServer } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Evento } from '../entities/evento.entity';
import { ImageService } from '../commons/image/image.service';
import { InsertEventoDto } from './dto/insert-evento.dto';
export declare class EventosService {
    private readonly eventRepo;
    private readonly imageService;
    private readonly httpServerRef;
    constructor(eventRepo: Repository<Evento>, imageService: ImageService, httpServerRef: HttpServer);
    getEventos(): Promise<Evento[]>;
    getEvento(id: number): Promise<Evento>;
    addEvento(evento: InsertEventoDto): Promise<Evento>;
    deleteEvento(id: number): Promise<import("typeorm").DeleteResult>;
}
