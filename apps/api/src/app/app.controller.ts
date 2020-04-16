import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { Todo } from '@abstractcoder/api-interfaces';
import { AppService } from './app.service';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async showTodos() {
    return await this.appService.listTodos();
  }

  @Post()
  async createTodo(@Body('text') text: string) {
    return await this.appService.createTodo(text);
  }

  @Patch(':id')
  async updateTodo(@Param('id') id: string, @Body() params: Todo) {
    return await this.appService.updateTodo(id, params);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return await this.appService.deleteTodo(id);
  }
}
