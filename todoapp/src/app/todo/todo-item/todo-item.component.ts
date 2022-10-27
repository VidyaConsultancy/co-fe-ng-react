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

  updatedTodo: string = '';
  isEditing: boolean = false;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  handleEditTodo() {
    this.isEditing = true;
    this.updatedTodo = this.todo.todo;
  }

  handleUpdateTodo() {
    if (!this.updatedTodo.trim()) return;
    this.todoService
      .updateTodo({ ...this.todo, todo: this.updatedTodo })
      .subscribe((res) => {
        this.isEditing = false;
        this.updatedTodo = '';
      });
  }

  handleDeleteTodo() {
    this.todoService.deleteTodo(this.todo.id).subscribe(() => {
      this.router.navigateByUrl('/todos');
    });
  }

  handleTodoToggle(event: any) {
    this.todoService
      .updateTodo({ ...this.todo, isCompleted: event.target.checked })
      .subscribe((res) => {});
  }
}
