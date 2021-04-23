import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { HashedUser } from './users/interfaces/hashedUser.interface';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Returns auth token' })
  @ApiUnauthorizedResponse()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user._doc);
  }

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Returns user profile' })
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.findProfile(req.user.email);
  }

  @Post('register')
  @ApiCreatedResponse({ description: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto): Promise<HashedUser | Error> {
    return this.authService.validateNewUser(createUserDto);
  }
}
