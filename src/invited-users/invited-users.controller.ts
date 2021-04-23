import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InvitedUserDto } from './dto/invited-user.dto';
import { InvitedUser } from './interfaces/invited-user.interface';
import { InvitedUsersService } from './invited-users.service';

@Controller('invited-users')
export class InvitedUsersController {
  constructor(private readonly invitedUserSevice: InvitedUsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse({ description: 'Create a new invited user' })
  @ApiBody({ type: InvitedUserDto })
  create(@Body() InvitedUserDto: InvitedUserDto): Promise<InvitedUser> {
    return this.invitedUserSevice.create(InvitedUserDto);
  }
}
