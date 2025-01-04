import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    description: 'Start date of the reservation',
    example: '2025-01-15T10:00:00Z',
    required: true,
  })
  @IsString()
  login: string;
  @IsString()
  password: string;
}
