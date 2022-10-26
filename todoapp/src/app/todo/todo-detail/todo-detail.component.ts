import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo.class';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  public todoId?: number;
  public todo?: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.todoId = +params['id'];
      this.todo = this.todoService.getTodoById(this.todoId)
    });
  }

  goBack(): void {
    // this.router.navigateByUrl('/todos');
    this.router.navigate(['/todos']);
  }
}
