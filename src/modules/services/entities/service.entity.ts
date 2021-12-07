import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Task } from 'src/modules/tasks/entities/task.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Service extends BaseEntity {
    @Column()
    name: string

    @ManyToOne(() => Task, task => task.name)
    tasks: Task[]
}
