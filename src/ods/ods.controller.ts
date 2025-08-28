import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OdsService } from './ods.service';

@Controller('ods')
export class OdsController {
  constructor(private readonly odsService: OdsService) {}

  @Post()
  create(@Body() data: any) {
    return this.odsService.create(data);
  }

  @Get()
  findAll() {
    return this.odsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.odsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odsService.remove(id);
  }
}
