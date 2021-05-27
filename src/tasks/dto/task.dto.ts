import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;

  @ApiProperty({ type: String, description: 'type' })
  readonly type?: String;

  @ApiProperty({ type: Array, description: 'questions' })
  readonly questions?: String[];

  @ApiProperty({ type: Array, description: 'cards' })
  readonly cards?: String[];

  @ApiProperty({ type: Array, description: 'instructions' })
  readonly instructions?: String;

  @ApiProperty({ type: Array, description: 'categories' })
  readonly categories?: String[];

  @ApiProperty({ type: Array, description: 'responses' })
  readonly responses: object[];

  @ApiProperty({ type: Array, description: 'categories' })
  readonly tasks?: [];

  @ApiProperty({ type: Array, description: 'responses' })
  readonly headings?: {};
  
  @ApiProperty({ type: Number, description: 'users required' })
  readonly usersRequired: number;
}
