import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Campaign } from '../campaigns/interfaces/campaign.interface';
import { WorkspaceDto } from './dto/workspace.dto';
import { WorkSpace } from './interfaces/workspace.interface';
import { WorkSpacesService } from './work-spaces.service';

@Controller('workSpace')
export class WorkSpacesController {
  constructor(private readonly workSpacesService: WorkSpacesService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiCreatedResponse({ description: 'Get WorkSpace by id' })
  findOne(@Param('id') id): Promise<WorkSpace> {
    return this.workSpacesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse({ description: 'Create a new WorkSpace' })
  @ApiBody({ type: WorkspaceDto })
  create(@Body() WorkspaceDto: WorkspaceDto): Promise<WorkSpace> {
    return this.workSpacesService.create(WorkspaceDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('new-campaign/:workspace_id')
  @ApiCreatedResponse({ description: 'Create a new campaign' })
  addCampaign(
    @Param('workspace_id') workspace_id,
    @Body() campaign: Campaign
  ): Promise<WorkSpace> {
    return this.workSpacesService.addCampaign(campaign, workspace_id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiCreatedResponse({ description: 'Modify WorkSpace' })
  @ApiBody({ type: WorkspaceDto })
  update(
    @Body() WorkspaceDto: WorkspaceDto,
    @Param('id') id
  ): Promise<WorkSpace> {
    return this.workSpacesService.update(id, WorkspaceDto);
  }
}
