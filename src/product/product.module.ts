import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ProductRepository } from './product.repository';

@Module({
    providers: [ProductResolver, ProductService, ProductRepository],
})
export class ProductModule {}
