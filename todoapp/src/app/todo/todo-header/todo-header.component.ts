import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent implements OnInit {
  @Input('appTitle') title?: string;
  @Output('addTodo') addTodoEventEmitter: EventEmitter<string> = new EventEmitter();
  public newTodo: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleAddTodo() {
    this.addTodoEventEmitter.emit(this.newTodo);
    this.newTodo = '';
  }
}
