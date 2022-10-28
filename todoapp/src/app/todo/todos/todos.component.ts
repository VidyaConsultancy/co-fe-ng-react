import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private todoService: TodoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.todos = data['todos'];
    })
    // this.fetchTodos();
  }

  handleAddTodo(newTodo: string) {
    if(newTodo.trim().length === 0) {
      return;
    }
    this.todoService.createTodo(newTodo).subscribe((res) => {
      this.fetchTodos();
    });
  }

  calculateCompletedTodos() {
    const completedTodos = this.todos.filter(todo => todo.isCompleted);
    this.completed = completedTodos.length;
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe((res) => {
      this.todos = res;
      this.calculateCompletedTodos();
    });
  }
}
