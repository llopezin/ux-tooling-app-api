import { ApiProperty } from '@nestjs/swagger';

export class CampaignDto {
  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;
  @ApiProperty({ type: Boolean, description: 'active' })
  readonly active?: boolean = false;
  @ApiProperty({ type: Array, description: 'user_task_ids' })
  readonly user_task_ids?: number[];
  @ApiProperty({ type: Number, description: 'report_id' })
  readonly report_id?: number;
}
