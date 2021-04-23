import { Module } from '@nestjs/common';
import { WorkSpacesService } from './work-spaces.service';
import { WorkSpacesController } from './work-spaces.controller';
import { workSpaceSchema } from './schemas/workspace.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsModule } from 'src/campaigns/campaigns.modules';

@Module({
  imports: [
    CampaignsModule,
    MongooseModule.forFeature([{ name: 'WorkSpace', schema: workSpaceSchema }]),
  ],
  providers: [WorkSpacesService],
  controllers: [WorkSpacesController],
  exports: [WorkSpacesService],
})
export class WorkSpacesModule {}
