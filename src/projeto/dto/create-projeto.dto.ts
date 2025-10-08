import { IsString, IsOptional } from 'class-validator';

/**
 * DTO para criação de Projeto.
 * Utilizado para validação dos dados recebidos na criação/atualização de projetos.
 */
export class CreateProjetoDto {
  @IsString()
  titulo: string;

  @IsString()
  @IsOptional()
  descricao?: string;
}
