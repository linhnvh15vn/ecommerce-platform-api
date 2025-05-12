import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateOptionDto } from 'src/options/dto/update-option.dto';
import { OptionsService } from 'src/options/options.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { QueryProductDto } from 'src/products/dto/query-product.dto';
import { generateSlug } from 'src/utils/generate-slug';
import { generateUniqueId } from 'src/utils/generate-unique-id';
import { UpdateVariantDto } from 'src/variants/dto/update-variant.dto';
import { VariantsService } from 'src/variants/variants.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly optionsService: OptionsService,
    private readonly variantsService: VariantsService,
  ) {}

  async findAll(queryProductDto: QueryProductDto) {
    const { title, pageIndex = 1, itemsPerPages = 10 } = queryProductDto;
    const products = await this.prismaService.product.findMany({
      where: {
        title: {
          contains: title,
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        title: true,
        thumbnail: true,
        variants: {
          select: {
            price: true,
            sale_price: true,
          },
        },
      },
      skip: (pageIndex - 1) * itemsPerPages,
      take: itemsPerPages,
      orderBy: {
        created_at: 'desc',
      },
    });
    const totalItems = await this.prismaService.product.count();

    return {
      items: products,
      currentItemCount: products.length,
      itemsPerPages,
      totalItems,
      pageIndex,
      totalPages: Math.ceil(totalItems / itemsPerPages),
    };
  }

  async findById(id: string) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
        collection: true,
        type: true,
        images: true,
        product_tags: {
          select: {
            tag: true,
          },
        },
      },
    });
    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }

  async findAllProductOptions(id: string) {
    return await this.optionsService.findAll(id);
  }

  async findAllProductVariants(id: string) {
    return await this.variantsService.findAll(id);
  }

  async create(createProductDto: CreateProductDto) {
    const { options, variants, ...restOfDto } = createProductDto;
    return await this.prismaService.$transaction(async (tx) => {
      const product = await tx.product.create({
        data: {
          id: `product_${generateUniqueId()}`,
          handle: generateSlug(createProductDto.title),
          ...restOfDto,
        },
      });

      for (const option of options) {
        await this.optionsService.create(option, product.id, tx);
      }

      for (const variant of variants) {
        await this.variantsService.create(variant, product.id, tx);
      }

      return product;
    });
  }

  async publish(id: string) {
    const product = await this.prismaService.product.update({
      where: {
        id,
      },
      data: {
        status: 'Published',
      },
    });
    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }

  async unpublish(id: string) {
    const product = await this.prismaService.product.update({
      where: {
        id,
      },
      data: {
        status: 'Draft',
      },
    });
    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }

  async updateOption(
    productId: string,
    optionId: string,
    updateOptionDto: UpdateOptionDto,
  ) {
    return await this.optionsService.update(
      productId,
      optionId,
      updateOptionDto,
    );
  }

  async updateVariant(
    productId: string,
    variantId: string,
    updateVariantDto: UpdateVariantDto,
  ) {
    return await this.variantsService.update(
      productId,
      variantId,
      updateVariantDto,
    );
  }

  async removeOption(productId: string, optionId: string) {
    return await this.optionsService.remove(productId, optionId);
  }

  async removeVariant(productId: string, variantId: string) {
    return await this.variantsService.remove(productId, variantId);
  }
}
