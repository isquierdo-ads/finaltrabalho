import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { CollaboratorsModule } from './modules/collaborators/collaborators.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      debug:false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,      
    }),
    
    CollaboratorsModule,
    
    TasksModule,
    
    ServicesModule,
    
  ],
  providers: [AppService],
})
export class AppModule {}
