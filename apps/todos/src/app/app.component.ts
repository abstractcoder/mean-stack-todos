import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@abstractcoder/api-interfaces';

@Component({
  selector: 'abstractcoder-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos : Todo[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Todo[]>('/api/todos').subscribe(todos => this.todos = todos);
  }

  async createTodo(text: string) {
    this.http.post<Todo>('/api/todos', {text: text}).subscribe(todo => this.todos.splice(0, 0, todo));
  }

  async toggleTodo(todo: Todo) {
    this.updateTodo(todo, {completed: !todo.completed});
  }

  async updateTodo(todo: Todo, params: any) {
    this.http.patch<Todo>('/api/todos/' + todo._id, params).subscribe(t => todo = t);
  }

  async deleteTodo(todo: Todo) {
    this.http.delete<Todo>('/api/todos/' + todo._id).subscribe(t =>
      this.todos = this.todos.filter(tt => tt._id !== t._id)
    )
  }
}
