import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './tasks.service';
import { Task } from './interfaces/task.interface';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Campaign } from 'src/campaigns/interfaces/campaign.interface';
import { get } from 'mongoose';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) { }

  @UseGuards(JwtAuthGuard)
  @Post('find')
  @ApiCreatedResponse({ description: 'Get many tasks by id' })
  findManyById(@Body() task_ids: string[]): Promise<Task[]> {
    return this.taskService.findMany(task_ids);
  }

  @Get(':id')
  @ApiCreatedResponse({ description: 'Get tasks by id' })
  findOne(@Param() id: string): Promise<Task> {
    return this.taskService.findOne(id);
  }
  
}
