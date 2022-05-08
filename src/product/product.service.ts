import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    create(createProductInput: CreateProductInput) {
        const product: Product = {
            ...createProductInput,
            id: undefined,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        return this.productRepository.save(product);
    }

    findAll(): Promise<Product[]> {
        return this.productRepository.findAll();
    }

    findOne(id: number) {
        return this.productRepository.findOne(id);
    }

    update(id: number, updateProductInput: UpdateProductInput) {
        const updatedUser: Partial<Product> = {
            ...updateProductInput,
            updatedAt: new Date(),
        };
        return this.productRepository.update(id, updatedUser);
    }

    remove(id: number) {
        return this.productRepository.deleteOne(id);
    }
}
