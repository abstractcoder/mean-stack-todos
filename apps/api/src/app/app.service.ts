import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Todo } from '@abstractcoder/api-interfaces';

@Injectable()
export class AppService {
  constructor(@InjectModel('Todo') private todoModel: Model<Todo>) {}

  async listTodos() {
    return this.todoModel.find().sort({createdAt: -1});
  }

  async createTodo(text: string) {
    return this.todoModel.create({text: text});
  }

  async updateTodo(id: string, params: Todo) {
    return this.todoModel.findByIdAndUpdate(id, params);
  }

  async deleteTodo(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
