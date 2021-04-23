import {
  Injectable,
  Dependencies,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InvitedUsersService } from '../invited-users/invited-users.service';
import { InvitedUser } from 'src/invited-users/interfaces/invited-user.interface';
import { WorkSpacesService } from 'src/workspaces/work-spaces.service';

@Dependencies(UsersService, JwtService, InvitedUsersService, WorkSpacesService)
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private invitedUsersService: InvitedUsersService,
    private workspaceService: WorkSpacesService
  ) {
    this.usersService = usersService;
    this.jwtService = jwtService;
    this.invitedUsersService = invitedUsersService;
    this.workspaceService;
  }

  async validateUser(email, pass) {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateNewUser(user) {
    if (await this.usersService.findOne(user.email)) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'User Already Registered',
        },
        HttpStatus.FORBIDDEN
      );
    }

    //Assing a workspace to the user before creating
    const workspace_id = await this.getWorkspace(user);
    const completeUser = { workspace_id: workspace_id, ...user };

    return this.usersService.create(completeUser);
  }

  async getWorkspace({ email }) {
    //Check if user has been invited by another member
    const foundInvitedUser: InvitedUser = await this.invitedUsersService.findOne(
      email
    );

    //If invited, assing workspace invited to, otherwise crate new workspace and set as admin
    return (
      foundInvitedUser?.workspace_id ||
      (await this.workspaceService.create({ admin_email: email })).id
    );
  }
}
