import { Document } from 'mongoose';

export interface Task extends Document {
  id?: string;
  name: string;
  type?: string;
  questions?: string[];

}
