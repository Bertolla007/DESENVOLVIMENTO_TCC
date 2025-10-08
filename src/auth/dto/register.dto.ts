import { IsEmail, IsString, IsOptional } from 'class-validator';

/**
 * DTO para registro de usuário.
 * Utilizado para validação dos dados recebidos no registro.
 */
export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  role?: string;
}
