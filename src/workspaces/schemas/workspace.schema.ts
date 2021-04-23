import * as mongoose from 'mongoose';

export const workSpaceSchema = new mongoose.Schema({
  admin_email: String,
  name: String,
  campaign_ids: [String],
});
