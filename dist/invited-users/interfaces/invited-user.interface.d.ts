import { Document } from 'mongoose';
export interface InvitedUser extends Document {
    email: string;
    workspace_id: string;
}
