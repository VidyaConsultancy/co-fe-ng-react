import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.class';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo?: Todo;
  @Input('isDetail') isDetail?: boolean;
  @Output('editTodo') editTodo: EventEmitter<number> = new EventEmitter();
  @Output('deleteTodo') deleteTodo: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleEditTodo() {}
  handleDeleteTodo() {}
}
