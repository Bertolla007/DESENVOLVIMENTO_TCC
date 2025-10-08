import { IsEmail, IsString } from 'class-validator';

/**
 * DTO para login de usuário.
 * Utilizado para validação dos dados recebidos no login.
 */
export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
