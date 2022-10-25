import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos/todos.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [TodosComponent, TodoHeaderComponent, TodoFooterComponent, TodoListComponent, TodoItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodosComponent],
})
export class TodoModule {}
