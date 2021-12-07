import {
   CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn
 } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

}
