import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { TaskDto } from './dto/task.dto'

@Injectable()
export class TaskService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>
  ) {}

  async create(taskDto: TaskDto): Promise<Task> {
    const createdTask = new this.taskModel(taskDto);
    return createdTask.save();
  }

  async findMany(idsArray: string[]): Promise<Task[]> {
    return this.taskModel.find({
      _id: idsArray,
    });
  }

}
