import { Field, InterfaceType, GraphQLISODateTime } from '@nestjs/graphql';

@InterfaceType({ isAbstract: true })
export abstract class CommonFields {
    @Field(() => GraphQLISODateTime)
    createdAt: Date;
    @Field(() => GraphQLISODateTime)
    updatedAt: Date;
}
