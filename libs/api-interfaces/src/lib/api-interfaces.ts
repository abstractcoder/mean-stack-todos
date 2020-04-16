import { Document } from 'mongoose'

export interface Todo extends Document {
  _id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}
