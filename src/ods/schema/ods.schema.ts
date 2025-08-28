import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OdsDocument = Ods & Document;

@Schema()
export class Ods extends Document{
  @Prop({ required: true })
  numero: number;

  @Prop({ required: true })
  titulo: string;

  @Prop()
  descricao: string;

  @Prop()
  imagem: string;
}

export const OdsSchema = SchemaFactory.createForClass(Ods);
