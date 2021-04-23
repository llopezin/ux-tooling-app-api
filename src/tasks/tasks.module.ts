import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { taskSchema } from './schemas/task.schema';
import { TasksController } from './tasks.controller';
import { TaskService } from './tasks.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: taskSchema }]),
  ],
  controllers: [TasksController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TasksModule {}
