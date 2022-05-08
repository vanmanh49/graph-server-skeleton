import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { PriceUnit } from './entities/price-unit.enum';

@Injectable()
export class ProductRepository {
    private static PRODUCT: Product[] = [
        {
            id: 1,
            name: 'Test',
            price: 15.3,
            priceUnit: PriceUnit.DOLLA,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            name: 'Test1',
            price: 19.3,
            priceUnit: PriceUnit.DOLLA,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    async findAll() {
        return ProductRepository.PRODUCT;
    }

    async findOne(id: number) {
        return ProductRepository.PRODUCT.find((u) => u.id === id);
    }

    async deleteOne(id: number) {
        ProductRepository.PRODUCT = ProductRepository.PRODUCT.filter((u) => u.id !== id);
        return true;
    }

    async save(product: Omit<Product, 'id'>) {
        const newUser: Product = {
            ...product,
            id: ProductRepository.PRODUCT.length + 1,
        };
        ProductRepository.PRODUCT.push(newUser);
        return newUser;
    }

    async update(id: number, product: Partial<Product>) {
        const index = ProductRepository.PRODUCT.findIndex((u) => u.id === id);
        ProductRepository.PRODUCT[index] = {
            ...ProductRepository.PRODUCT[index],
            ...product,
        };
        return ProductRepository.PRODUCT[index];
    }
}
