import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCollectionDto } from 'src/collections/dto/create-collection.dto';
import { QueryCollectionDto } from 'src/collections/dto/query-collection.dto';
import { UpdateCollectionDto } from 'src/collections/dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateSlug } from 'src/utils/generate-slug';
import { generateUniqueId } from 'src/utils/generate-unique-id';

@Injectable()
export class CollectionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(queryCollectionDto: QueryCollectionDto) {
    const { title, pageIndex = 1, itemsPerPages = 10 } = queryCollectionDto;
    const collections = await this.prismaService.collection.findMany({
      where: {
        title: {
          contains: title,
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
      items: collections,
      currentItemCount: collections.length,
      itemsPerPages,
      totalItems,
      pageIndex,
      totalPages: Math.ceil(totalItems / itemsPerPages),
    };
  }

  async findById(id: string) {
    const collection = await this.prismaService.collection.findUnique({
      where: {
        id,
      },
    });
    if (!collection) {
      throw new NotFoundException();
    }

    return collection;
  }

  async create({ title }: CreateCollectionDto) {
    const collection = await this.prismaService.collection.create({
      data: {
        id: `collection_${generateUniqueId()}`,
        title,
        handle: generateSlug(title),
      },
    });

    return collection;
  }

  async update(id: string, { title }: UpdateCollectionDto) {
    const collection = await this.prismaService.collection.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });
    if (!collection) {
      throw new NotFoundException();
    }

    return collection;
  }

  remove(id: string) {
    return 'Not Implement';
  }
}
