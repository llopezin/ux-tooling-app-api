import * as mongoose from 'mongoose';

export const invitedUserSchema = new mongoose.Schema({
  email: String,
  workspace_id: String,
});
