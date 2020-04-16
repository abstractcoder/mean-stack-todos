import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  text: {type: String, null: false},
  completed: {type: Boolean, null: false, default: false},
  createdAt: {type: Date, null: false, default: Date.now}
});
