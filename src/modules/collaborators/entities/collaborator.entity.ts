import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Task } from 'src/modules/tasks/entities/task.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class Collaborator extends BaseEntity {

  @Column()
  name: string;

  @Column()
  cpf: string;

  @OneToOne(() => Task)
  task: Task
}
