/**
 * Controller responsável pelas rotas de Usuários.
 * Permite criar, listar, buscar, atualizar e remover usuários do sistema.
 *
 * Segurança:
 * - Rotas protegidas por autenticação JWT.
 * - Apenas usuários autenticados podem acessar.
 *
 * Exemplos de uso:
 * - POST /users { email, password, role }
 * - GET /users
 * - GET /users/email/:email
 * - PUT /users/:email { email, password, role }
 * - DELETE /users/:email
 *
 * Para autenticar, envie o token JWT no header Authorization: Bearer <token>
 */
import { Controller, Post, Body, Get, Put, Delete, Param, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

/**
 * Controller responsável pelas rotas de Usuários.
 * Permite criar, listar, buscar, atualizar e remover usuários do sistema.
 */
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() data: CreateUserDto) {
        try {
            const user = await this.usersService.create(data.email, data.password, data.role);
            return { message: 'Usuário criado com sucesso', user };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    @Get()
    async findAll() {
        return { users: await this.usersService.findAll() };
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) throw new NotFoundException('Usuário não encontrado');
        return user;
    }

    @Get('protected') 
    getProtected() {
        return { message: 'This is a protected route' };
    }

    @Put(':email')
    async update(@Param('email') email: string, @Body() data: CreateUserDto) {
        const user = await this.usersService.findByEmail(email);
        if (!user) throw new NotFoundException('Usuário não encontrado para atualizar');
        // Hash the password before saving
        const bcrypt = require('bcryptjs');
        if (data.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(data.password, salt);
        }
        user.role = data.role || user.role;
        await user.save();
        return { message: 'Usuário atualizado com sucesso', user };
    }

    @Delete(':email')
    async remove(@Param('email') email: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) throw new NotFoundException('Usuário não encontrado para remover');
        await user.deleteOne();
        return { message: 'Usuário removido com sucesso' };
    }
}