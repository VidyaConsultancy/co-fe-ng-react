import { Component } from '@angular/core';
import { TodoService } from './todo/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'todoapp';

  constructor(private todoService: TodoService) {}

  public getTodos() {
    console.log(this.todoService.getTodos())
  }
}
