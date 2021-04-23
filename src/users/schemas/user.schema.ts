import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  workspace_id: String,
});
