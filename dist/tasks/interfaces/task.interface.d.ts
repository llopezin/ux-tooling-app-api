import { Document } from 'mongoose';
export interface Task extends Document {
    id?: string;
    name: string;
    type: string;
    questions?: string[];
    categories?: string[];
    instructions?: string;
    cards?: string[];
    tasks?: [];
    headings?: {};
    responses: [];
    usersRequired: number;
}
