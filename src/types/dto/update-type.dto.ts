import { PartialType } from '@nestjs/swagger';
import { CreateTypeDto } from 'src/types/dto/create-type.dto';

export class UpdateTypeDto extends PartialType(CreateTypeDto) {}
