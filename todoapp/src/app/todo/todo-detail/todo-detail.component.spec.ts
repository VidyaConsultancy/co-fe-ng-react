import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Todo } from '../models/todo.class';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';
import { TodosComponent } from '../todos/todos.component';

import { TodoDetailComponent } from './todo-detail.component';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'todos', component: TodosComponent },
        ]),
        HttpClientTestingModule,
      ],
      declarations: [TodoDetailComponent, TodoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to todos page', () => {
    fixture.ngZone?.run(
      fakeAsync(() => {
        component.goBack();
        tick(100);
        const location = fixture.debugElement.injector.get(Location);
        expect(location.path()).toContain('todos');
      })
    );
  });

  it('should receive todo detail', () => {
    const todoService = fixture.debugElement.injector.get(TodoService);
    const getTodoByIdSpy = spyOn(todoService, 'getTodoById').and.returnValue(
      of({ id: 1, todo: 'Learn Angular', isCompleted: false })
    );
    component.ngOnInit();
    expect(getTodoByIdSpy).toHaveBeenCalledTimes(1);
    expect(component.todo).toEqual({
      id: 1,
      todo: 'Learn Angular',
      isCompleted: false,
    });
  });
});
