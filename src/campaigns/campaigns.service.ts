import { Injectable } from '@nestjs/common';
import { Campaign } from './interfaces/campaign.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CampaignDto } from './dto/campaign.dto';
import * as mongoose from 'mongoose';
import { Task } from 'src/tasks/interfaces/task.interface';
import { TaskService } from 'src/tasks/tasks.service';

@Injectable()
export class CampaignsService {
  constructor(
    private readonly taskService: TaskService,
    @InjectModel('Campaign') private readonly campaignModel: Model<Campaign>
  ) {}

  async findAll(): Promise<Campaign[]> {
    return this.campaignModel.find().exec();
  }

  async findOne(id: string): Promise<Campaign> {
    return this.campaignModel.findOne({ _id: id });
  }

  async findMany(idsArray: string[]): Promise<Campaign[]> {
    return this.campaignModel.find({
      _id: idsArray,
    });
  }

  async create(CampaignDto: CampaignDto): Promise<Campaign> {
    const createdCampaign = new this.campaignModel(CampaignDto);
    return createdCampaign.save();
  }

  async delete(id: string): Promise<Campaign> {
    return this.campaignModel.findOneAndDelete({ _id: id });
  }

  async update(id: string, updates: any): Promise<Campaign> {
    const res = await this.campaignModel.findByIdAndUpdate(id, updates, { new: true });
    console.log('res:', res)
    
    return res
  }

  
  async addTask(
    task: Task,
    campaign_id: string
  ): Promise<Campaign> {
    const newTask = await this.taskService.create(task);
    const updates = {
      $push: { user_task_ids:  newTask.id}
    };
    
    return this.update(campaign_id, updates);
  }
}
