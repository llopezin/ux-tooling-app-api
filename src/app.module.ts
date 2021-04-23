import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsModule } from './campaigns/campaigns.modules';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import keys from './config/keys';
import { PassportModule } from '@nestjs/passport';
import { WorkSpacesModule } from './workspaces/works-paces.module';
import { InvitedUsersModule } from './invited-users/invited-users.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    CampaignsModule,
    MongooseModule.forRoot(keys.mongoURI, { useFindAndModify: false }),
    AuthModule,
    UsersModule,
    PassportModule,
    WorkSpacesModule,
    InvitedUsersModule,
    TasksModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
