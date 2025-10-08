import { IsString, IsOptional } from 'class-validator';

/**
 * DTO para criação de ODS (Objetivo de Desenvolvimento Sustentável).
 * Utilizado para validação dos dados recebidos na criação/atualização.
 */
export class CreateOdsDto {
  @IsString()
  nome: string;

  @IsString()
  @IsOptional()
  descricao?: string;
}
