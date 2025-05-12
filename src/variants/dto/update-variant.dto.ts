import { PartialType } from '@nestjs/swagger';
import { CreateVariantDto } from 'src/variants/dto/create-variant.dto';

export class UpdateVariantDto extends PartialType(CreateVariantDto) {}
