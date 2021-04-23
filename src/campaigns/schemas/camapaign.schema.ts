import * as mongoose from 'mongoose';

export const campaignSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
  user_task_ids: Array,
  report_id: Number,
});
