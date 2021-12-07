import { CreateCollaboratorInput } from './create-collaborator.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCollaboratorInput extends PartialType(CreateCollaboratorInput) {
  @Field(() => String)
  id: string;
}
