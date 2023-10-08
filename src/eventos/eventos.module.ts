import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { EventosService } from './eventos.service';
import { Evento } from '../entities/evento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonsModule } from '../commons/commons.module';

@Module({
  imports: [TypeOrmModule.forFeature([Evento]), CommonsModule],
  controllers: [EventosController],
  providers: [EventosService],
})
export class EventosModule {}
