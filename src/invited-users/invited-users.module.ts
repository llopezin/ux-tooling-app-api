import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvitedUsersController } from './invited-users.controller';
import { InvitedUsersService } from './invited-users.service';
import { invitedUserSchema } from './schemas/invited-user.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      { name: 'InvitedUser', schema: invitedUserSchema },
    ]),
  ],
  controllers: [InvitedUsersController],
  providers: [InvitedUsersService],
  exports: [InvitedUsersService],
})
export class InvitedUsersModule {}
