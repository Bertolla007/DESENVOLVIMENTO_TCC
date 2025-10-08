import { Module } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { ProjetosController } from './projeto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Projeto, ProjetoSchema } from './projeto.schema';

/**
 * Módulo de Projetos.
 * Responsável por operações relacionadas a projetos vinculados aos ODS.
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Projeto.name, schema: ProjetoSchema }])
  ],
  controllers: [ProjetosController],
  providers: [ProjetoService],
})
export class ProjetoModule {}
