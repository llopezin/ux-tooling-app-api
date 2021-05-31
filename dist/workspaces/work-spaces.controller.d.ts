import { Campaign } from '../campaigns/interfaces/campaign.interface';
import { WorkspaceDto } from './dto/workspace.dto';
import { WorkSpace } from './interfaces/workspace.interface';
import { WorkSpacesService } from './work-spaces.service';
export declare class WorkSpacesController {
    private readonly workSpacesService;
    constructor(workSpacesService: WorkSpacesService);
    findOne(id: any): Promise<WorkSpace>;
    create(WorkspaceDto: WorkspaceDto): Promise<WorkSpace>;
    addCampaign(workspace_id: any, campaign: Campaign): Promise<WorkSpace>;
    update(WorkspaceDto: WorkspaceDto, id: any): Promise<WorkSpace>;
}
