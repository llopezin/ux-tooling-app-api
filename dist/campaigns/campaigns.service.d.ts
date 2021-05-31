import { Campaign } from './interfaces/campaign.interface';
import { Model } from 'mongoose';
import { CampaignDto } from './dto/campaign.dto';
import { Task } from 'src/tasks/interfaces/task.interface';
import { TaskService } from 'src/tasks/tasks.service';
export declare class CampaignsService {
    private readonly taskService;
    private readonly campaignModel;
    constructor(taskService: TaskService, campaignModel: Model<Campaign>);
    findAll(): Promise<Campaign[]>;
    findOne(id: string): Promise<Campaign>;
    findMany(idsArray: string[]): Promise<Campaign[]>;
    create(CampaignDto: CampaignDto): Promise<Campaign>;
    delete(id: string): Promise<Campaign>;
    update(id: string, updates: any): Promise<Campaign>;
    addTask(task: Task, campaign_id: string): Promise<Campaign>;
}
