import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvitedUserDto } from './dto/invited-user.dto';
import { InvitedUser } from './interfaces/invited-user.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class InvitedUsersService {
  constructor(
    @InjectModel('InvitedUser')
    private readonly invitedUserModel: Model<InvitedUser>,
    private readonly usersService: UsersService
  ) {}

  async findOne(email: string): Promise<InvitedUser> {
    return this.invitedUserModel.findOne({ email: email });
  }

  async create(InvitedUserDto: InvitedUserDto): Promise<InvitedUser> {
    if (await this.usersService.findOne(InvitedUserDto.email)) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'User Already Registered',
        },
        HttpStatus.FORBIDDEN
      );
    }

    const createdInviteduser = new this.invitedUserModel(InvitedUserDto);
    return createdInviteduser.save();
  }
}
