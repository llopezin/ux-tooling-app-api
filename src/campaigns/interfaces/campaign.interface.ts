import { Document } from 'mongoose';

export interface Campaign extends Document {
  id?: string;
  name: string;
  active?: boolean;
  user_task_ids?: number[];
  report_id?: number;
}
