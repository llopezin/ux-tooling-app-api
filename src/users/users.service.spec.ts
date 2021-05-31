import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { userSchema } from './schemas/user.schema';

describe('UserService', () => {
  let service: UsersService;

  const mockUsersRepository = {
    create: jest.fn().mockImplementation(dto=>dto),
    save:  jest.fn().mockImplementation(user=> Promise.resolve({ _id: "" , email: "",
      workspace_id: ""}))
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken('User'),
          useValue: mockUsersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create user', async ()=> {
    expect(await service.create({ email: "", password: ""})).toEqual({ _id: expect.any(String) , email: "",
    workspace_id: ""})
  })
});
  