import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/user.dto';
import { HashedUser } from './interfaces/hashedUser.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email: email });
  }

  async findProfile(userEmail: string): Promise<HashedUser> {
    const user = await this.userModel.findOne({ email: userEmail });
    const { id, email, workspace_id } = user;
    const hashedUser = { id, email, workspace_id };

    return hashedUser;
  }

  async create(createUserDto: CreateUserDto): Promise<HashedUser> {
    const createdUser = new this.userModel(createUserDto);
    const user = await createdUser.save();
    const { id, email, workspace_id } = user;
    const hashedUser = { id, email, workspace_id };

    return hashedUser;
  }
}
