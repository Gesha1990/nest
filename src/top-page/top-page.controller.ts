import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  HttpCode,
  Body,
  Param,
} from '@nestjs/common';

import { TopPageModule } from './top-page.module';
import { TopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModule, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModule) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: TopPageDto) {}
}
