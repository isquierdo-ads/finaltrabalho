import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {

  @Field()
  name:string;
}