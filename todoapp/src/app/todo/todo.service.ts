import { Injectable } from '@angular/core';
import { Todo } from './models/todo.class';

@Injectable({
  providedIn: 'root' // 'root', 'platform', 'any'
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() { }

  createTodo(todo: string) {
    this.todos.push(new Todo(this.todos.length + 1, todo));
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
