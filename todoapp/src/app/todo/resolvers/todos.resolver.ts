import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.class';
import { TodoService } from '../todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodosResolver implements Resolve<Todo[]> {
  constructor(private todoService: TodoService) {}

  resolve(): Observable<Todo[]> {
    return this.todoService.getTodos();
  }
}
