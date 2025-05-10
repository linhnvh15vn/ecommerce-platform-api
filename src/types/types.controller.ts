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
import { CreateTypeDto } from 'src/types/dto/create-type.dto';
import { QueryTypeDto } from 'src/types/dto/query-type.dto';
import { UpdateTypeDto } from 'src/types/dto/update-type.dto';
import { TypesService } from 'src/types/types.service';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Get()
  findAll(@Query() queryTypeDto: QueryTypeDto) {
    return this.typesService.findAll(queryTypeDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.typesService.findById(id);
  }

  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(id, updateTypeDto);
  }

  @Delete(':id')
  remove(id: string) {
    return this.typesService.remove(id);
  }
}
