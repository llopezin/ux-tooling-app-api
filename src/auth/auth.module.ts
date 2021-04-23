import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { InvitedUsersModule } from '../invited-users/invited-users.module';
import { WorkSpacesModule } from 'src/workspaces/works-paces.module';

@Module({
  imports: [
    UsersModule,
    InvitedUsersModule,
    WorkSpacesModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: jwtConstants.secret,
      /* signOptions: { expiresIn: '6000s' }, */
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
