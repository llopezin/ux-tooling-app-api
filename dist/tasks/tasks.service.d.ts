import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { TaskDto } from './dto/task.dto';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    create(taskDto: TaskDto): Promise<Task>;
    findMany(idsArray: string[]): Promise<Task[]>;
    findOne(id: any): Promise<Task>;
    update(id: string, updates: any): Promise<Task>;
    addResponse(task_id: string, response: object): Promise<Task>;
}
