import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { Role } from './role.entity';

@Entity({
  name: 'permissions',
})
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
    comment: '权限代码',
  })
  code: string;

  @Column({
    length: 100,
    comment: '权限描述',
  })
  description: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
}
