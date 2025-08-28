import { Module } from '@nestjs/common';
import { OdsService } from './ods.service';
import { OdsController } from './ods.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ods, OdsSchema } from './schema/ods.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ods.name, schema: OdsSchema }])],
  controllers: [OdsController],
  providers: [OdsService],
})
export class OdsModule {}

