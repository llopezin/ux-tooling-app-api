import { Model } from 'mongoose';
import { InvitedUserDto } from './dto/invited-user.dto';
import { InvitedUser } from './interfaces/invited-user.interface';
import { UsersService } from 'src/users/users.service';
export declare class InvitedUsersService {
    private readonly invitedUserModel;
    private readonly usersService;
    constructor(invitedUserModel: Model<InvitedUser>, usersService: UsersService);
    findOne(email: string): Promise<InvitedUser>;
    create(InvitedUserDto: InvitedUserDto): Promise<InvitedUser>;
}
