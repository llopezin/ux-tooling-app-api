import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { TaskDto } from './dto/task.dto'
import { Campaign } from '../campaigns/interfaces/campaign.interface';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>
  ) { }

  async create(taskDto: TaskDto): Promise<Task> {
    console.log('taskDto:', taskDto)
    const createdTask = new this.taskModel(taskDto);
    console.log('createdTask:', createdTask)
    return createdTask.save();

  }

  async findMany(idsArray: string[]): Promise<Task[]> {
    return this.taskModel.find({
      _id: idsArray,
    });
  }

  async findOne(id): Promise<Task> {
    return this.taskModel.findOne({ _id: id.id });
  }

  async update(id: string, updates: any): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(id, updates, { new: true }); 
  }

  async addResponse(task_id: string, response: object): Promise<Task> {
    const updates = {
      $push: { responses: response }
    };
    return this.update(task_id, updates);
  }

}
