import { Document } from 'mongoose';

export interface WorkSpace extends Document {
  id?: string;
  admin_email: string;
  name?: string;
  campaign_ids: string[];
}
