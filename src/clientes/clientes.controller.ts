import { Controller, Get, Post, Body, ValidationPipe, Delete, Param, ParseIntPipe, NotFoundException, Req } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { InsertClienteDto } from './dto/insert-cliente.dto';
import { Clientes } from '../entities/cliente.entity';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}

    @Get()
    async getClientes(@Req() req) {
      let clientes: Clientes[] = await this.clientesService.getClientes();
      clientes = clientes.map(e => {
        return e;
      });
      return { clientes };
    }

    @Get(':id')
    async getCliente(@Req() req, @Param('id', ParseIntPipe) id: number) {
      const cliente = await this.clientesService.getCliente(id);
      return {cliente};
    }

    @Post()
    async insertCliente(
      @Body(new ValidationPipe({ transform: true, whitelist: true })) clienteDto: InsertClienteDto,
      @Req() req,
    ) {
      const cliente = await this.clientesService.addCliente(clienteDto);
      return { cliente };
    }

    @Delete(':id')
    async deleteCliente(@Param('id', ParseIntPipe) id: number) {
      const result = await this.clientesService.deleteCliente(id);
      if (result.raw.affectedRows === 0) {
        throw new NotFoundException('Cliente no encontrado');
      } else {
        return { id };
      }
    }
}
