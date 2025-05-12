import { Module } from '@nestjs/common';
import { OptionsModule } from 'src/options/options.module';
import { VariantsModule } from 'src/variants/variants.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [OptionsModule, VariantsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
