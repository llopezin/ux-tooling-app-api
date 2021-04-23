import { ApiProperty } from '@nestjs/swagger';

export class InvitedUserDto {
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;
  @ApiProperty({ type: String, description: 'workspace_id' })
  readonly workspace_id: string;
}
