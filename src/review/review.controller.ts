import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { JwtAuthGurd } from 'src/auth/gurds/jwt.guards';
import { UserEmail } from 'src/decorators/user-email.decorator';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}
  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateReviewDto) {
    this.reviewService.create(dto);
  }
  @UseGuards(JwtAuthGurd)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteDoc = this.reviewService.delete(id);
    if (!deleteDoc) {
      throw new HttpException('', HttpStatus.NOT_FOUND);
    } else {
      return deleteDoc;
    }
  }
  @UseGuards(JwtAuthGurd)
  @Get('byProduct/:productId')
  async get(@Param('productId') productId: string, @UserEmail() email: string) {
    this.reviewService.findByProductId(productId);
  }
}
