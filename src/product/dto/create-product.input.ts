import { InputType, Field, Float } from '@nestjs/graphql';
import { PriceUnit } from '../entities/price-unit.enum';

@InputType()
export class CreateProductInput {
    @Field(() => String)
    name: string;
    @Field(() => Float)
    price: number;
    @Field(() => PriceUnit)
    priceUnit: PriceUnit;
}
