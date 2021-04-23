import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CampaignsService } from 'src/campaigns/campaigns.service';
import { Campaign } from 'src/campaigns/interfaces/campaign.interface';
import { WorkspaceDto } from './dto/workspace.dto';
import { WorkSpace } from './interfaces/workspace.interface';

@Injectable()
export class WorkSpacesService {
  constructor(
    private readonly campaingsService: CampaignsService,
    @InjectModel('WorkSpace') private readonly workSpaceModel: Model<WorkSpace>
  ) {}

  async findOne(id: string): Promise<WorkSpace> {
    return this.workSpaceModel.findOne({ _id: id });
  }

  async create(workspaceDto: WorkspaceDto): Promise<WorkSpace> {
    const createdWorkSpace = new this.workSpaceModel(workspaceDto);
    return createdWorkSpace.save();
  }

  async update(id: string, updates: any): Promise<WorkSpace> {
    return this.workSpaceModel.findByIdAndUpdate(id, updates, { new: true });
  }

  async addCampaign(
    campaign: Campaign,
    workspace_id: string
  ): Promise<WorkSpace> {
    const newCampaign = await this.campaingsService.create(campaign);
    const updates = {
      $push: { campaign_ids:  newCampaign.id}
    };

    return this.update(workspace_id, updates);
  }
}
