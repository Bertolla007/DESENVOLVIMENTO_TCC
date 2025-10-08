import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OdsModule } from './ods/ods.module';
import { ProjetoModule } from './projeto/projeto.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

/**
 * Módulo raiz da aplicação.
 * Responsável por importar todos os módulos principais e configurar o banco de dados.
 */
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ods-projects'),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60, // tempo em segundos
          limit: 20, // máximo de requisições por IP por minuto
        },
      ],
    }),
    OdsModule,
    ProjetoModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}