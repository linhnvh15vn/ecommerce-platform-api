import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateUniqueId } from 'src/utils/generate-unique-id';
import { CreateVariantDto } from 'src/variants/dto/create-variant.dto';
import { UpdateVariantDto } from 'src/variants/dto/update-variant.dto';

@Injectable()
export class VariantsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(productId: string) {
    const variants = await this.prismaService.variant.findMany({
      where: {
        product_id: productId,
      },
      include: {
        option_variants: {
          select: {
            option_value: true,
          },
        },
      },
    });

    return variants;
  }

  async create(
    createVariantDto: CreateVariantDto,
    productId: string,
    tx: Prisma.TransactionClient = this.prismaService,
  ) {
    const { combinations, ...restOfDto } = createVariantDto;

    const variant = await tx.variant.create({
      data: {
        id: `variant_${generateUniqueId()}`,
        product_id: productId,
        ...restOfDto,
      },
    });

    for (const value of combinations) {
      const optValue = await tx.optionValue.findFirst({
        where: {
          value,
          option: {
            product_id: productId,
          },
        },
      });
      if (!optValue) {
        throw new NotFoundException();
      }

      await tx.optionVariant.create({
        data: {
          variant_id: variant.id,
          option_value_id: optValue.id,
        },
      });
    }

    return variant;
  }

  async update(
    productId: string,
    variantId: string,
    updateVariantDto: UpdateVariantDto,
  ) {
    const variant = await this.prismaService.variant.update({
      where: {
        id: variantId,
        product_id: productId,
      },
      data: updateVariantDto,
    });
    if (!variant) {
      throw new NotFoundException();
    }

    return variant;
  }

  async remove(productId: string, variantId: string) {
    const variant = await this.prismaService.variant.delete({
      where: {
        id: variantId,
        product_id: productId,
      },
    });
    if (!variant) {
      throw new NotFoundException();
    }

    return variant;
  }
}
