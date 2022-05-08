import { registerEnumType } from '@nestjs/graphql';
export enum PriceUnit {
    DOLLA,
    VIETNAM_DONG,
}

registerEnumType(PriceUnit, { name: 'Price' });
