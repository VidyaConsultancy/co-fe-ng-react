import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './models/todo.class';

@Injectable({
  providedIn: 'root', // 'root', 'platform', 'any'
})
export class TodoService {
  ops: string[] = [];
  
  constructor(private http: HttpClient) {}

  createTodo(todo: string) {
    const todoObj = new Todo(todo);
    return this.http.post<Todo>(`http://localhost:3000/todos`, todoObj);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:3000/todos`);
  }

  getTodoById(id: number) {
    return this.http.get<Todo>(`http://localhost:3000/todos/${id}`);
  }

  deleteTodo(id: number) {
    return this.http.delete(`http://localhost:3000/todos/${id}`)
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  add(x: number, y: number) {
    this.ops.push('add');
    return x + y;
  }
}
