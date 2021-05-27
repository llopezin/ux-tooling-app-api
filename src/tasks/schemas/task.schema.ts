import * as mongoose from 'mongoose';

export const taskSchema = new mongoose.Schema({
  name: String,
  type: String,
  questions: Array,
  categories: Array,
  cards: Array,
  instructions: String,
  responses: Array,
  tasks: Array,
  headings: Map,
  usersRequired: Number
});
