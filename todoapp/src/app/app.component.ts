import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { TodoService } from './todo/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'todoapp';
  public obs: BehaviorSubject<number>;
  public isAuthorized: boolean;

  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private router: Router
  ) {
    this.obs = new BehaviorSubject(0);
    this.obs.subscribe((value) => {
      // console.log('sub1', value);
    });
    this.obs.next(10);
    this.authService.getAccessToken().subscribe((res) => {
      this.isAuthorized = Boolean(res);
    });
  }

  // public getTodos() {
  //   console.log(this.todoService.getTodos());
  //   this.obs.subscribe((value) => {
  //     // console.log('sub2', value);
  //   });
  //   this.obs.next(20);
  // }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
