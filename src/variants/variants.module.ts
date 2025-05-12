import { Module } from '@nestjs/common';
import { VariantsService } from './variants.service';

@Module({
  providers: [VariantsService],
  exports: [VariantsService],
})
export class VariantsModule {}
