import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { ProductModule } from './product.module';
import { FindProductDto } from './dto/find-product.dto';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModule, '_id'>) {}

  @Get(':id')
  async get(@Param('id', IdValidationPipe) id: string) {}

  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {}

  @Patch(':id')
  async patch(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: ProductModule,
  ) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {}
}
