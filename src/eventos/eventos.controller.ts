import { Controller, Get, Post, Body, ValidationPipe, Delete, Param, ParseIntPipe, HttpException, NotFoundException, Req } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { InsertEventoDto } from './dto/insert-evento.dto';
import { Evento } from '../entities/evento.entity';

@Controller('eventos')
export class EventosController {
    constructor(private readonly eventosService: EventosService) {}

    @Get()
    async getEventos(@Req() req) {
      let eventos: Evento[] = await this.eventosService.getEventos();
      eventos = eventos.map(e => {
        e.image = `${req.protocol}://${req.get('host')}/${e.image}`;
        return e;
      });
      return { eventos };
    }

    @Get(':id')
    async getEvento(@Req() req, @Param('id', ParseIntPipe) id: number) {
      const evento = await this.eventosService.getEvento(id);
      evento.image = `${req.protocol}://${req.get('host')}/${evento.image}`;
      return {evento};
    }

    @Post()
    async insertEvento(
      @Body(new ValidationPipe({ transform: true, whitelist: true })) eventoDto: InsertEventoDto,
      @Req() req,
    ) {
      const evento = await this.eventosService.addEvento(eventoDto);
      evento.image = `${req.protocol}://${req.get('host')}/${evento.image}`;
      return { evento };
    }

    @Delete(':id')
    async deleteEvento(@Param('id', ParseIntPipe) id: number) {
      const result = await this.eventosService.deleteEvento(id);
      if (result.raw.affectedRows === 0) {
        throw new NotFoundException('Evento no encontrado');
      } else {
        return { id };
      }
    }
}
