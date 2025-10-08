import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjetoService } from './projeto.service';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly projetosService: ProjetoService) {}

  @Post()
  create(@Body() data: any) {
    return this.projetosService.create(data);
  }

  @Get()
  findAll() {
    return this.projetosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projetosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.projetosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetosService.remove(id);
  }
}
