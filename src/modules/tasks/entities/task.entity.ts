import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Collaborator } from 'src/modules/collaborators/entities/collaborator.entity';
import { Service } from 'src/modules/services/entities/service.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Task extends BaseEntity {

  @Column()
  name: string


  @OneToOne(() => Collaborator)
  collaborator: Collaborator

  @OneToMany(() => Service, services => services.name)
  services: Service[]
}
