import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { TaskDTO } from './dto/task.dto';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';


@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Task])],
      resolvers: [
        { 
          DTOClass: TaskDTO, 
          EntityClass: Task,
          CreateDTOClass: CreateTaskInput,
          UpdateDTOClass: UpdateTaskInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        }
      ],
    }),
  ],
  providers: [],
})
export class TasksModule {}
