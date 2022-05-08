import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductService } from './product.service';
import { Roles } from '@auth/decorator/roles.decorator';
import { Role } from '@user/user.dto';

@Resolver(() => Product)
export class ProductResolver {
    constructor(private readonly productService: ProductService) {}

    @Roles(Role.ADMIN)
    @Mutation(() => Product)
    createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
        return this.productService.create(createProductInput);
    }

    @Query(() => [Product], { name: 'products', nullable: true })
    findAll() {
        return this.productService.findAll();
    }

    @Query(() => Product, { name: 'product', nullable: true })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.productService.findOne(id);
    }

    @Roles(Role.ADMIN)
    @Mutation(() => Product)
    updateProduct(
        @Args('id', { type: () => Int }) id: number,
        @Args('updateProductInput') updateProductInput: UpdateProductInput,
    ) {
        return this.productService.update(id, updateProductInput);
    }

    @Roles(Role.ADMIN)
    @Mutation(() => Boolean)
    removeProduct(@Args('id', { type: () => Int }) id: number) {
        return this.productService.remove(id);
    }
}
