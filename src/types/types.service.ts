import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeDto } from 'src/types/dto/create-type.dto';
import { QueryTypeDto } from 'src/types/dto/query-type.dto';
import { UpdateTypeDto } from 'src/types/dto/update-type.dto';
import { generateUniqueId } from 'src/utils/generate-unique-id';

@Injectable()
export class TypesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(queryTypeDto: QueryTypeDto) {
    const { value, pageIndex = 1, itemsPerPage = 10 } = queryTypeDto;
    const types = await this.prismaService.type.findMany({
      where: {
        value: {
          contains: value,
          mode: 'insensitive',
        },
      },
      skip: (pageIndex - 1) * itemsPerPage,
      take: itemsPerPage,
      orderBy: {
        created_at: 'desc',
      },
    });
    const totalItems = await this.prismaService.collection.count();

    return {
      items: types,
      currentItemCount: types.length,
      itemsPerPage,
      totalItems,
      pageIndex,
      totalPages: Math.ceil(totalItems / itemsPerPage),
    };
  }

  async findById(id: string) {
    const type = await this.prismaService.type.findUnique({
      where: {
        id,
      },
    });
    if (!type) {
      throw new NotFoundException();
    }

    return type;
  }

  async create({ value }: CreateTypeDto) {
    const type = await this.prismaService.type.create({
      data: {
        id: `type_${generateUniqueId()}`,
        value,
      },
    });

    return type;
  }

  async update(id: string, { value }: UpdateTypeDto) {
    const type = await this.prismaService.type.update({
      where: {
        id,
      },
      data: {
        value,
      },
    });
    if (!type) {
      throw new NotFoundException();
    }

    return type;
  }

  remove(id: string) {
    return 'Not Implement';
  }
}
