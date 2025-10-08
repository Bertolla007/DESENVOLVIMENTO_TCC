/**
 * Controller responsável pelas rotas de ODS (Objetivos de Desenvolvimento Sustentável).
 * Permite criar, listar, buscar, atualizar e remover ODS.
 *
 * Exemplos de uso:
 * - POST /ods { nome, descricao }
 * - GET /ods
 * - GET /ods/:id
 * - PUT /ods/:id { nome, descricao }
 * - DELETE /ods/:id
 */
import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateOdsDto } from './dto/create-ods.dto';

/**
 * Controller responsável pelas rotas de ODS (Objetivos de Desenvolvimento Sustentável).
 * Permite criar, listar, buscar, atualizar e remover ODS.
 */
import { OdsService } from './ods.service';

@Controller('ods')
export class OdsController {
  constructor(private readonly odsService: OdsService) {}

  @Post()
  async create(@Body() data: CreateOdsDto) {
    try {
      const ods = await this.odsService.create(data);
      return { message: 'ODS criada com sucesso', ods };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async findAll() {
    return { ods: await this.odsService.findAll() };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const ods = await this.odsService.findOne(id);
    if (!ods) throw new NotFoundException('ODS não encontrada');
    return ods;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateOdsDto) {
    const ods = await this.odsService.update(id, data);
    if (!ods) throw new NotFoundException('ODS não encontrada para atualizar');
    return { message: 'ODS atualizada com sucesso', ods };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const ods = await this.odsService.remove(id);
    if (!ods) throw new NotFoundException('ODS não encontrada para remover');
    return { message: 'ODS removida com sucesso' };
  }
}
