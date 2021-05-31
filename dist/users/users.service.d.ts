import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/user.dto';
import { HashedUser } from './interfaces/hashedUser.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findOne(email: string): Promise<User>;
    findProfile(userEmail: string): Promise<HashedUser>;
    create(createUserDto: CreateUserDto): Promise<HashedUser>;
}
