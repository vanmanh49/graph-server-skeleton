import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { CommonFields } from './common.entity';
import { PriceUnit } from './price-unit.enum';

@ObjectType({ implements: () => [CommonFields] })
export class Product extends CommonFields {
    @Field(() => Int)
    id: number;
    @Field(() => String)
    name: string;
    @Field(() => Float)
    price: number;
    @Field(() => PriceUnit)
    priceUnit: PriceUnit;
}
