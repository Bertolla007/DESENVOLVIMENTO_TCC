/**
 * Controller responsável pelas rotas de Projetos vinculados aos ODS.
 * Permite criar, listar, buscar, atualizar e remover projetos.
 *
 * Segurança:
 * - Rotas protegidas por JWT e guardas de roles.
 * - Apenas usuários autenticados podem acessar.
 * - Apenas admin/editor podem criar/editar/remover.
 *
 * Exemplos de uso:
 * - POST /projetos { nome, descricao }
 * - GET /projetos
 * - GET /projetos/:id
 * - PUT /projetos/:id { nome, descricao }
 * - DELETE /projetos/:id
 *
 * Para autenticar, envie o token JWT no header Authorization: Bearer <token>
 */
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

/**
 * Controller responsável pelas rotas de Projetos vinculados aos ODS.
 * Permite criar, listar, buscar, atualizar e remover projetos.
 */
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { ProjetoService } from './projeto.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('projetos')
export class ProjetosController {
  constructor(private readonly projetosService: ProjetoService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'editor')
  @Post()
  async create(@Body() data: CreateProjetoDto) {
    try {
      const projeto = await this.projetosService.create(data);
      return { message: 'Projeto criado com sucesso', projeto };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return { projetos: await this.projetosService.findAll() };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const projeto = await this.projetosService.findOne(id);
    if (!projeto) throw new NotFoundException('Projeto não encontrado');
    return projeto;
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'editor')
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateProjetoDto) {
    const projeto = await this.projetosService.update(id, data);
    if (!projeto) throw new NotFoundException('Projeto não encontrado para atualizar');
    return { message: 'Projeto atualizado com sucesso', projeto };
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const projeto = await this.projetosService.remove(id);
    if (!projeto) throw new NotFoundException('Projeto não encontrado para remover');
    return { message: 'Projeto removido com sucesso' };
  }
}
