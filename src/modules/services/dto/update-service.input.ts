import { CreateServiceInput } from './create-service.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateServiceInput extends PartialType(CreateServiceInput) {
  @Field(() => ID, {nullable:true})
  id?: string;
}
