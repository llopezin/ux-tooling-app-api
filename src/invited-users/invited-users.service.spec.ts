import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from 'src/users/users.service';
import { InvitedUsersService } from './invited-users.service';
import {getModelToken, MongooseModule} from '@nestjs/mongoose';
import {userSchema} from '../users/schemas/user.schema';
import { AuthService } from 'src/auth/auth.service';
import {JwtModule} from '@nestjs/jwt';
import {UsersModule} from '../users/users.module';
import {PassportModule} from '@nestjs/passport';
import {jwtConstants} from '../auth/constants';
import {MongooseConfigService} from '../shared/services/MongooseConfigService';

describe('InvitedUsersService', () => {
  let service: InvitedUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        MongooseModule.forRootAsync({
          useClass: MongooseConfigService,
        }),
      ],
      providers: [InvitedUsersService, AuthService, UsersService, {
        provide: getModelToken('InvitedUser'),
        useValue: userSchema,
      }]
    }).compile();

    service = module.get<InvitedUsersService>(InvitedUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
 