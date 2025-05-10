import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { QueryCategoryDto } from 'src/categories/dto/query-category.dto';
import { UpdateCategoryDto } from 'src/categories/dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateSlug } from 'src/utils/generate-slug';
import { generateUniqueId } from 'src/utils/generate-unique-id';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(queryCategoryDto: QueryCategoryDto) {
    const {
      title,
      is_active,
      pageIndex = 1,
      itemsPerPages = 1,
    } = queryCategoryDto;

    const categories = await this.prismaService.category.findMany({
      where: {
        is_active,
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
    const totalItems = await this.prismaService.category.count();

    return {
      items: categories,
      currentItemCount: categories.length,
      itemsPerPages,
      totalItems,
      pageIndex,
      totalPages: Math.ceil(totalItems / itemsPerPages),
    };
  }

  async findById(id: string) {
    const category = await this.prismaService.category.findUnique({
      where: {
        id,
      },
    });
    if (!category) {
      throw new NotFoundException();
    }

    return category;
  }

  async create(createCategoryDto: CreateCategoryDto) {
    let mpath = '/';
    if (createCategoryDto.parent_category_id) {
      const parent = await this.findById(createCategoryDto.parent_category_id);
      mpath = parent.mpath;
    }

    const createdCategory = await this.prismaService.category.create({
      data: {
        id: `category_${generateUniqueId()}`,
        handle: generateSlug(createCategoryDto.title),
        mpath: '',
        ...createCategoryDto,
      },
    });

    const updatedCategory = await this.prismaService.category.update({
      where: {
        id: createdCategory.id,
      },
      data: {
        mpath: `${mpath}${createdCategory.id}/`,
      },
    });

    return updatedCategory;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.prismaService.category.update({
      where: {
        id,
      },
      data: updateCategoryDto,
    });
    if (!category) {
      throw new NotFoundException();
    }

    return category;
  }

  remove(id: string) {
    return 'Not Implement';
  }
}
