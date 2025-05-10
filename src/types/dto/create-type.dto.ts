import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTypeDto {
  @ApiProperty()
  @IsString()
  value: string;
}
