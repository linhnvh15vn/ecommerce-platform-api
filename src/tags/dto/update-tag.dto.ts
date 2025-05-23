import { PartialType } from '@nestjs/swagger';
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';

export class UpdateTagDto extends PartialType(CreateTagDto) {}
