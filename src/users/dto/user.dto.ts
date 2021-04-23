import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;
  @ApiProperty({ type: String, description: 'password' })
  readonly password: string;
  @ApiProperty({ type: String, description: 'workspace_id' })
  readonly workspace_id?: number;
}
