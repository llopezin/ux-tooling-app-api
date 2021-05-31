import { InvitedUserDto } from './dto/invited-user.dto';
import { InvitedUser } from './interfaces/invited-user.interface';
import { InvitedUsersService } from './invited-users.service';
export declare class InvitedUsersController {
    private readonly invitedUserSevice;
    constructor(invitedUserSevice: InvitedUsersService);
    create(InvitedUserDto: InvitedUserDto): Promise<InvitedUser>;
}
