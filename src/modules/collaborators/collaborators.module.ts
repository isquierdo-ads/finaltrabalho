import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CollaboratorDTO } from './dto/collaborator.dto';
import { CreateCollaboratorInput } from './dto/create-collaborator.input';
import { UpdateCollaboratorInput } from './dto/update-collaborator.input';
import { Collaborator } from './entities/collaborator.entity';


@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Collaborator])],
      resolvers: [
        { 
          DTOClass: CollaboratorDTO, 
          EntityClass: Collaborator,
          CreateDTOClass: CreateCollaboratorInput,
          UpdateDTOClass: UpdateCollaboratorInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        }
      ],
    }),
  ],
  providers: [],
})
export class CollaboratorsModule {}
