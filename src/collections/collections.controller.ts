import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CollectionsService } from 'src/collections/collections.service';
import { CreateCollectionDto } from 'src/collections/dto/create-collection.dto';
import { QueryCollectionDto } from 'src/collections/dto/query-collection.dto';
import { UpdateCollectionDto } from 'src/collections/dto/update-collection.dto';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get()
  findAll(@Query() queryCategoryDto: QueryCollectionDto) {
    return this.collectionsService.findAll(queryCategoryDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.collectionsService.findById(id);
  }

  @Post()
  create(@Body() createCategoryDto: CreateCollectionDto) {
    return this.collectionsService.create(createCategoryDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCollectionDto,
  ) {
    return this.collectionsService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(id: string) {
    return this.collectionsService.remove(id);
  }
}
