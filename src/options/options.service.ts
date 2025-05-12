import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { CreateOptionDto } from 'src/options/dto/create-option.dto';
import { UpdateOptionDto } from 'src/options/dto/update-option.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateUniqueId } from 'src/utils/generate-unique-id';

@Injectable()
export class OptionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(productId: string) {
    const options = await this.prismaService.option.findMany({
      where: {
        product_id: productId,
      },
      include: {
        option_values: true,
      },
    });

    return options;
  }

  async create(
    createOptionDto: CreateOptionDto,
    productId: string,
    tx: Prisma.TransactionClient = this.prismaService,
  ) {
    const { title, values } = createOptionDto;
    const option = await tx.option.create({
      data: {
        id: `option_${generateUniqueId()}`,
        title,
        product_id: productId,
        option_values: {
          create: values.map((value) => ({
            id: `opt_val_${generateUniqueId()}`,
            value,
          })),
        },
      },
    });

    return option;
  }

  async update(
    productId: string,
    optionId: string,
    updateOptionDto: UpdateOptionDto,
  ) {
    const option = await this.prismaService.option.update({
      where: {
        id: optionId,
        product_id: productId,
      },
      data: updateOptionDto,
    });
    if (!option) {
      throw new NotFoundException();
    }

    return option;
  }

  async remove(productId: string, optionId: string) {
    const option = await this.prismaService.option.delete({
      where: {
        id: optionId,
        product_id: productId,
      },
    });
    if (!option) {
      throw new NotFoundException();
    }

    return option;
  }
}
