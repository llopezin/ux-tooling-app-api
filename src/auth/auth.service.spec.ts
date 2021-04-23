import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../users/users.module';

import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { MongooseConfigService } from '../shared/services/MongooseConfigService';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let authSservice: AuthService;
  let userService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        PassportModule.register({ session: true }),
        JwtModule.register({
          secret: jwtConstants.secret,
        }),
        MongooseModule.forRootAsync({
          useClass: MongooseConfigService,
        }),
      ],
      providers: [AuthService, LocalStrategy, JwtStrategy],
    }).compile();

    authSservice = module.get<AuthService>(AuthService);
    userService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(authSservice).toBeDefined();
  });

  it('should get user', () => {
    const getUserSpy = jest.spyOn(userService, 'findOne');
    authSservice.validateUser('test@test.com', 'password1234');

    expect(getUserSpy).toBeCalledTimes(1);
  });

  it('should call jwt service for an access token', () => {
    const getjwtSpy = jest.spyOn(jwtService, 'sign');
    authSservice.login({ email: 'test@test.com', password: '123456789' });

    expect(getjwtSpy).toBeCalledTimes(1);
  });

  it('should check for availability before attempting to create user', () => {
    const getUserSpy = jest.spyOn(userService, 'findOne');
    authSservice.validateNewUser({
      email: 'test@test.com',
      password: '123456789',
    });

    expect(getUserSpy).toBeCalledTimes(1);
  });
});
