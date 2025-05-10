import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';
import { QueryTagDto } from 'src/tags/dto/query-tag.dto';
import { UpdateTagDto } from 'src/tags/dto/update-tag.dto';
import { generateUniqueId } from 'src/utils/generate-unique-id';

@Injectable()
export class TagsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(queryTagDto: QueryTagDto) {
    const { value, pageIndex = 1, itemsPerPages = 10 } = queryTagDto;
    const tags = await this.prismaService.tag.findMany({
      where: {
        value: {
          contains: value,
          mode: 'insensitive',
        },
      },
      skip: (pageIndex - 1) * itemsPerPages,
      take: itemsPerPages,
      orderBy: {
        created_at: 'desc',
      },
    });
    const totalItems = await this.prismaService.collection.count();

    return {
      items: tags,
      currentItemCount: tags.length,
      itemsPerPages,
      totalItems,
      pageIndex,
      totalPages: Math.ceil(totalItems / itemsPerPages),
    };
  }

  async findById(id: string) {
    const tag = await this.prismaService.tag.findUnique({
      where: {
        id,
      },
    });
    if (!tag) {
      throw new NotFoundException();
    }

    return tag;
  }

  async create({ value }: CreateTagDto) {
    const tag = await this.prismaService.tag.create({
      data: {
        id: `tag_${generateUniqueId()}`,
        value,
      },
    });

    return tag;
  }

  async update(id: string, { value }: UpdateTagDto) {
    const tag = await this.prismaService.tag.update({
      where: {
        id,
      },
      data: {
        value,
      },
    });
    if (!tag) {
      throw new NotFoundException();
    }

    return tag;
  }

  remove(id: string) {
    return 'Not Implement';
  }
}
