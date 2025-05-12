import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CollectionsModule } from './collections/collections.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { TypesModule } from './types/types.module';
import { ProductsModule } from './products/products.module';
import { OptionsModule } from './options/options.module';
import { VariantsModule } from './variants/variants.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    CategoriesModule,
    CollectionsModule,
    TagsModule,
    TypesModule,
    ProductsModule,
    OptionsModule,
    VariantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
