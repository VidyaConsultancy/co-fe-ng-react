import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo.class';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public appTitle: string = 'Todos';
  public todos: Todo[] = [];
  public completed: number = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.calculateCompletedTodos();
  }

  handleAddTodo(newTodo: string) {
    if(newTodo.trim().length === 0) {
      return;
    }
    this.todos.push(new Todo(this.todos.length + 1, newTodo))
    this.todoService.createTodo(newTodo);
    this.calculateCompletedTodos();
  }

  calculateCompletedTodos() {
    const completedTodos = this.todos.filter(todo => todo.isCompleted);
    this.completed = completedTodos.length;
  }
}
