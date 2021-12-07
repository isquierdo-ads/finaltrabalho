import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
 
 @ObjectType()
 export class BaseDTO {
   @FilterableField()
   id: string
 
   @FilterableField()
   createAt: Date;
 
   @FilterableField()
   updateAt: Date;
 
   @FilterableField()
   deleteAt: Date;
 
 }