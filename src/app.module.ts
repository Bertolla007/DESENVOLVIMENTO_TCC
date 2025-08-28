import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OdsModule } from './ods/ods.module';
import { ProjetoModule } from './projeto/projeto.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/ods-projects'),
    OdsModule,OdsModule, ProjetoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

