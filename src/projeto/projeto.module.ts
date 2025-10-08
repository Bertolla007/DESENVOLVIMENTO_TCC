import { Module } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { ProjetoController } from './projeto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Projeto, ProjetoSchema } from './projeto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Projeto.name, schema: ProjetoSchema }])
  ],
  controllers: [ProjetoController],
  providers: [ProjetoService],
})
export class ProjetoModule {}
