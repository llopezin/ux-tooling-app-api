import * as mongoose from 'mongoose';

export const taskSchema = new mongoose.Schema({
  name: String,
  type: String,
  questions: Array,
  categories: Array,
  cards: Array,
  responses: Array,
  usersRequired: Number
});
