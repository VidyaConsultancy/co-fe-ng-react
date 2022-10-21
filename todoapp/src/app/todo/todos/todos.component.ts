import { Component, OnInit } from '@angular/core';

import { Todo } from "../models/todo.class";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public appTitle: string = 'Todos';
  public todos: Todo[] = [
    new Todo(1, 'Learn HTML', true),
    new Todo(1, 'Learn CSS', true),
    new Todo(1, 'Learn Javascript', false),
    new Todo(1, 'Learn ES6', true),
    new Todo(1, 'Learn Angular', false),
    new Todo(1, 'Learn React', false),
  ];

  constructor() {}

  ngOnInit(): void {}
}
