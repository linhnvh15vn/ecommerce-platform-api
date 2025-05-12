import { PartialType } from '@nestjs/swagger';
import { CreateOptionDto } from 'src/options/dto/create-option.dto';

export class UpdateOptionDto extends PartialType(CreateOptionDto) {}
