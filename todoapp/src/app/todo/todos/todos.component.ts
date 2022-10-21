import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo.class';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public appTitle: string = 'Todos';
  public todos: Todo[] = [
    new Todo(1, 'Learn HTML', true),
    new Todo(2, 'Learn CSS', true),
    new Todo(3, 'Learn Javascript', false),
    new Todo(4, 'Learn ES6', true),
    new Todo(5, 'Learn Angular', false),
    new Todo(6, 'Learn React', false),
  ];
  public color: string = 'blue';
  public newTodo: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleAddTodo() {
    if(this.newTodo.trim().length === 0) {
      alert('Incorrect input');
      return;
    }
    this.todos.push(new Todo(this.todos.length + 1, this.newTodo))
    this.newTodo = '';
  }
}
