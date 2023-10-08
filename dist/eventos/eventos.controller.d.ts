import { EventosService } from './eventos.service';
import { InsertEventoDto } from './dto/insert-evento.dto';
import { Evento } from '../entities/evento.entity';
export declare class EventosController {
    private readonly eventosService;
    constructor(eventosService: EventosService);
    getEventos(req: any): Promise<{
        eventos: Evento[];
    }>;
    getEvento(req: any, id: number): Promise<{
        evento: Evento;
    }>;
    insertEvento(eventoDto: InsertEventoDto, req: any): Promise<{
        evento: Evento;
    }>;
    deleteEvento(id: number): Promise<{
        id: number;
    }>;
}
