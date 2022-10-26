import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo.class';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo: Todo;
  @Input('isDetail') isDetail?: boolean;
  @Output('editTodo') editTodo: EventEmitter<number> = new EventEmitter();
  @Output('deleteTodo') deleteTodo: EventEmitter<number> = new EventEmitter();

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  handleEditTodo() {}

  handleDeleteTodo() {
    this.todoService.deleteTodo(this.todo.id).subscribe(() => {
      this.router.navigateByUrl('/todos');
    })
  }
}
