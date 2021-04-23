import { ApiProperty } from '@nestjs/swagger';

export class WorkspaceDto {
  @ApiProperty({ type: String, description: 'admin_email' })
  readonly admin_email: string;
  @ApiProperty({ type: String, description: 'name' })
  readonly name?: string;
  @ApiProperty({ type: Array, description: 'campaign_ids' })
  readonly campaign_ids?: string[];
}
