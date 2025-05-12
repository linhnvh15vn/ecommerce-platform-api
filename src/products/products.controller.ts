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
import { UpdateOptionDto } from 'src/options/dto/update-option.dto';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { QueryProductDto } from 'src/products/dto/query-product.dto';
import { ProductsService } from 'src/products/products.service';
import { UpdateVariantDto } from 'src/variants/dto/update-variant.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query() queryProductDto: QueryProductDto) {
    return this.productsService.findAll(queryProductDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

  @Get(':id/options')
  findAllProductOptions(@Param('id') id: string) {
    return this.productsService.findAllProductOptions(id);
  }

  @Get(':id/variants')
  findAllProductVariants(@Param('id') id: string) {
    return this.productsService.findAllProductVariants(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Patch(':id/publish')
  publish(@Param('id') id: string) {
    return this.productsService.publish(id);
  }

  @Patch(':id/unpublish')
  unpublish(@Param('id') id: string) {
    return this.productsService.unpublish(id);
  }

  @Patch(':id/options/:optionId')
  updateOption(
    @Param('id') id: string,
    @Param('optionId') optionId: string,
    @Body() updateOptionDto: UpdateOptionDto,
  ) {
    return this.productsService.updateOption(id, optionId, updateOptionDto);
  }

  @Patch(':id/variants/:variantId')
  updateVariant(
    @Param('id') id: string,
    @Param('optionId') optionId: string,
    @Body() updateVariantDto: UpdateVariantDto,
  ) {
    return this.productsService.updateOption(id, optionId, updateVariantDto);
  }

  @Delete(':id/options/:optionId')
  removeOption(@Param('id') id: string, @Param('optionId') optionId: string) {
    return this.productsService.removeOption(id, optionId);
  }

  @Delete(':id/variants/:variantId')
  removeVariant(
    @Param('id') id: string,
    @Param('variantId') variantId: string,
  ) {
    return this.productsService.removeVariant(id, variantId);
  }
}
