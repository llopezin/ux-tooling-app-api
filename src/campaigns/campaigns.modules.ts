import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsController } from './campaigns.controller';
import { campaignSchema } from './schemas/camapaign.schema';
import { CampaignsService } from './campaigns.service';
import {TasksModule} from '../tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forFeature([{ name: 'Campaign', schema: campaignSchema }]),
  ],
  controllers: [CampaignsController],
  providers: [CampaignsService],
  exports: [CampaignsService],
})
export class CampaignsModule {}
