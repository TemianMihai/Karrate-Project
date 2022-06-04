import { Field, ObjectType } from '@nestjs/graphql'
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import * as bcrypt from 'bcrypt'

@ObjectType()
@Entity({ name: 'users' })
export class UserModel {
  @Field({ nullable: false })
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field({ nullable: false })
  @Column('varchar', { length: 255 })
  email: string

  @Field({ nullable: false })
  @Column('varchar', { length: 255 })
  password: string

  @Field({ nullable: false })
  @Column('varchar', { length: 255, name: 'first_name'})
  firstName: string

  @Field({ nullable: false })
  @Column('varchar', { length: 255, name: 'last_name'})
  lastName: string

  @Field({ nullable: false })
  @Column('varchar', { length: 255, name: 'club'})
  club: string

  @Field({ nullable: true })
  @Column('varchar', { length: 255, name: 'activation_key', nullable: true })
  activationKey?: string

  @Field({ nullable: true })
  @Column('varchar', { length: 255, name: 'refresh_token', nullable: true })
  refreshToken?: string

  @Field({ nullable: true })
  @Column('boolean', { default: true, name: 'is_active' })
  isActive: boolean

  @Field({ nullable: true })
  @Column('boolean', { default: false, name: 'is_admin' })
  isAdmin?: boolean

  @Field({ nullable: false })
  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at',
  })
  createdAt: Date

  @Field({ nullable: false })
  @UpdateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    name: 'updated_at',
  })
  updatedAt: Date

  @BeforeInsert()
  async setPassword(password: string): Promise<void> {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(password || this.password, salt)
  }
}
