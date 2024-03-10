import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
<<<<<<< HEAD
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
=======

@Module({
  controllers: [UserController]
>>>>>>> 00f95ca4b2258229bf3f04d8a053f913ffb123db
})
export class UserModule {}
