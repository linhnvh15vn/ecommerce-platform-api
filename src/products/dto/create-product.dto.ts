import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { CreateOptionDto } from 'src/options/dto/create-option.dto';
import { CreateVariantDto } from 'src/variants/dto/create-variant.dto';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsUrl()
  thumbnail: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  category_id?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  collection_id?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  type_id?: string;

  @ApiPropertyOptional({ type: [CreateOptionDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateOptionDto)
  options: CreateOptionDto[];

  @ApiPropertyOptional({ type: [CreateVariantDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateVariantDto)
  variants: CreateVariantDto[];
}
