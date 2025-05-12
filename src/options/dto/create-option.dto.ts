import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreateOptionDto {
  @ApiProperty({ example: 'Kích thước' })
  @IsString()
  title: string;

  @ApiProperty({ type: [String], example: ['S', 'M', 'L'] })
  @IsArray()
  @IsString({ each: true })
  values: string[];
}
