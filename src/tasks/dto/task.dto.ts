import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;
  @ApiProperty({ type: String, description: 'type' })
  readonly type?: String;
  @ApiProperty({ type: Array, description: 'questions' })
  readonly questions?: String[];
}
