import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { Clientes } from '../entities/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonsModule } from '../commons/commons.module';

@Module({
  imports: [TypeOrmModule.forFeature([Clientes]), CommonsModule],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
