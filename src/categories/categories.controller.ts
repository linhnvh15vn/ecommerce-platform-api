import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CategoriesService } from 'src/categories/categories.service';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { QueryCategoryDto } from 'src/categories/dto/query-category.dto';
import { UpdateCategoryDto } from 'src/categories/dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(@Query() queryCategoryDto: QueryCategoryDto) {
    return this.categoriesService.findAll(queryCategoryDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.categoriesService.findById(id);
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(id: string) {
    return this.categoriesService.remove(id);
  }
}
