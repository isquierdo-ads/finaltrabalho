import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateServiceInput } from './dto/create-service.input';
import { ServiceDTO } from './dto/service.dto';
import { UpdateServiceInput } from './dto/update-service.input';
import { Service } from './entities/service.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Service])],
      resolvers: [
        { 
          DTOClass: ServiceDTO, 
          EntityClass: Service,
          CreateDTOClass: CreateServiceInput,
          UpdateDTOClass: UpdateServiceInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        }
      ],
    }),
  ],
  providers: [],
})
export class ServicesModule {}
