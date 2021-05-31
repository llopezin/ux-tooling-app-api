import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/user.dto';
import { HashedUser } from './users/interfaces/hashedUser.interface';
import { UsersService } from './users/users.service';
export declare class AppController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<HashedUser>;
    create(createUserDto: CreateUserDto): Promise<HashedUser | Error>;
}
