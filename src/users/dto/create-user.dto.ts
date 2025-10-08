import { IsString, IsEmail, IsOptional } from 'class-validator';

/**
 * DTO para criação de Usuário.
 * Utilizado para validação dos dados recebidos na criação/atualização de usuários.
 */
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  role?: string;
}
