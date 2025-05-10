import { PartialType } from '@nestjs/swagger';
import { CreateCollectionDto } from 'src/collections/dto/create-collection.dto';

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {}
