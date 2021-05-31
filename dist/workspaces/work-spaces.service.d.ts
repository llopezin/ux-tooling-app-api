import { Model } from 'mongoose';
import { CampaignsService } from 'src/campaigns/campaigns.service';
import { Campaign } from 'src/campaigns/interfaces/campaign.interface';
import { WorkspaceDto } from './dto/workspace.dto';
import { WorkSpace } from './interfaces/workspace.interface';
export declare class WorkSpacesService {
    private readonly campaingsService;
    private readonly workSpaceModel;
    constructor(campaingsService: CampaignsService, workSpaceModel: Model<WorkSpace>);
    findOne(id: string): Promise<WorkSpace>;
    create(workspaceDto: WorkspaceDto): Promise<WorkSpace>;
    update(id: string, updates: any): Promise<WorkSpace>;
    addCampaign(campaign: Campaign, workspace_id: string): Promise<WorkSpace>;
}
