import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService, ConfigModule } from '@nestjs/config'

import { DateScalar } from '../common/scalars/date.scalar'

import { CommonModule } from '../common/common.module'

import { BasicStrategy } from './basic.strategy'
import { JwtStrategy } from './jwt.strategy'

import { UserModel } from './models/user.model'

import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel]),
    CommonModule,
    ConfigModule,
  ],
  providers: [
    UsersResolver,
    ConfigService,
    UsersService,
    DateScalar,
    JwtStrategy,
    BasicStrategy,
  ],
  exports: [UsersService, TypeOrmModule.forFeature([UserModel])],
})
export class UsersModule {
}
