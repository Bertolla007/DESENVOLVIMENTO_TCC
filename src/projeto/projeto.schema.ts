import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjetoDocument = Projeto & Document;

@Schema({ timestamps: true })
export class Projeto {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  curso: string;

  @Prop({ required: true })
  tipo: string;

  @Prop({ type: [Number], default: [] })
  odsRelacionadas: number[];
}

export const ProjetoSchema = SchemaFactory.createForClass(Projeto);