import { CampaignDto } from './dto/campaign.dto';
import { CampaignsService } from './campaigns.service';
import { Campaign } from './interfaces/campaign.interface';
import { Task } from 'src/tasks/interfaces/task.interface';
export declare class CampaignsController {
    private readonly camapaignsService;
    constructor(camapaignsService: CampaignsService);
    findOne(id: any): Promise<Campaign>;
    findManyById(campaign_ids: string[]): Promise<Campaign[]>;
    create(CampaignDto: CampaignDto): Promise<Campaign>;
    delete(id: any): Promise<Campaign>;
    update(updateCampaigDto: CampaignDto, id: any): Promise<Campaign>;
    addCampaign(campaign_id: any, task: Task): Promise<Campaign>;
}
