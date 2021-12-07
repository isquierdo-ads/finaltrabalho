import { Field, InputType} from '@nestjs/graphql';

@InputType()
export class CreateCollaboratorInput {
  @Field()
  name: string;

  @Field()
  cpf: string;
}
