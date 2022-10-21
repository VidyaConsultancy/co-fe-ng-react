import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodosComponent],
})
export class TodoModule {}
