import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateVariantDto {
  @ApiProperty({ type: [String], example: ['Đen', 'S'] })
  @IsArray()
  @IsString({ each: true })
  combinations: string[];

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsPositive()
  price: number;

  @ApiPropertyOptional()
  @IsInt()
  @IsPositive()
  @IsOptional()
  sale_price?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  sku?: string;

  @ApiPropertyOptional()
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;
}
