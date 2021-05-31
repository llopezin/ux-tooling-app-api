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
import { CampaignDto } from './dto/campaign.dto';
import { CampaignsService } from './campaigns.service';
import { Campaign } from './interfaces/campaign.interface';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {WorkSpace} from '../workspaces/interfaces/workspace.interface';
import { Task } from 'src/tasks/interfaces/task.interface';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly camapaignsService: CampaignsService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiCreatedResponse({ description: 'Get campaign by id' })
  findOne(@Param('id') id): Promise<Campaign> {
    return this.camapaignsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('find')
  @ApiCreatedResponse({ description: 'Get many campaigns by id' })
  findManyById(@Body() campaign_ids: string[]): Promise<Campaign[]> {
    return this.camapaignsService.findMany(campaign_ids);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse({ description: 'Create a new campaign' })
  @ApiBody({ type: CampaignDto })
  create(@Body() CampaignDto: CampaignDto): Promise<Campaign> {
    return this.camapaignsService.create(CampaignDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiCreatedResponse({ description: 'Remove campaing by id' })
  delete(@Param('id') id): Promise<Campaign> {
    return this.camapaignsService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiCreatedResponse({ description: 'Modify campaign' })
  @ApiBody({ type: CampaignDto })
  update(
    @Body() updateCampaigDto: CampaignDto,
    @Param('id') id
  ): Promise<Campaign> {
    return this.camapaignsService.update(id, updateCampaigDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/new-task')
  @ApiCreatedResponse({ description: 'Create a new task' })
  addCampaign(
    @Param('id') campaign_id,
    @Body() task: Task
    ): Promise<Campaign> {
    return this.camapaignsService.addTask(task, campaign_id);
  }
}
