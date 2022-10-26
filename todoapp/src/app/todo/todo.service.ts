import { Injectable } from '@angular/core';
import { Todo } from './models/todo.class';

@Injectable({
  providedIn: 'root', // 'root', 'platform', 'any'
})
export class TodoService {
  private todos: Todo[] = [
    new Todo(1, 'Learn HTML', true),
    new Todo(2, 'Learn CSS', true),
    new Todo(3, 'Learn Javascript', false),
    new Todo(4, 'Learn ES6', true),
    new Todo(5, 'Learn Angular', false),
    new Todo(6, 'Learn React', false),
  ];

  constructor() {}

  createTodo(todo: string) {
    this.todos.push(new Todo(this.todos.length + 1, todo));
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.find((t) => t.id === id);
  }
}
