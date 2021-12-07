import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';


@ObjectType()
export class ServiceDTO extends BaseDTO {
 @FilterableField()
 name: string
}