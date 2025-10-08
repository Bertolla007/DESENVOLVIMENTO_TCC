/**
 * Controller responsável pelas rotas de autenticação (login e registro).
 *
 * Exemplos de uso:
 * - POST /auth/register { email, password, role }
 * - POST /auth/login { email, password }
 *
 * O login retorna um access_token JWT para ser usado nas demais rotas protegidas.
 */
import { Controller, Post, Body, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

/**
 * Controller responsável pelas rotas de autenticação (login e registro).
 */
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    try {
      const user = await this.usersService.create(body.email, body.password, body.role);
      return { message: 'Usuário registrado com sucesso', user };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    try {
      return await this.authService.login(body.email, body.password);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}


