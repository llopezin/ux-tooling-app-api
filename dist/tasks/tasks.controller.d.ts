import { TaskDto } from './dto/task.dto';
import { TaskService } from './tasks.service';
import { Task } from './interfaces/task.interface';
import { Campaign } from 'src/campaigns/interfaces/campaign.interface';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findManyById(task_ids: string[]): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    addResponse(response: object, task_id: string): Promise<Task>;
    update(updateTaskDto: TaskDto, id: any): Promise<Campaign>;
}
