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
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';
import { QueryTagDto } from 'src/tags/dto/query-tag.dto';
import { UpdateTagDto } from 'src/tags/dto/update-tag.dto';
import { TagsService } from 'src/tags/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  findAll(@Query() queryTagDto: QueryTagDto) {
    return this.tagsService.findAll(queryTagDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.tagsService.findById(id);
  }

  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(id, updateTagDto);
  }

  @Delete(':id')
  remove(id: string) {
    return this.tagsService.remove(id);
  }
}
