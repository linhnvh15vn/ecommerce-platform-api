import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { generateUniqueId } from 'src/utils/generate-unique-id';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        id: `user_${generateUniqueId()}`,
        ...createUserDto,
      },
    });
  }
}
