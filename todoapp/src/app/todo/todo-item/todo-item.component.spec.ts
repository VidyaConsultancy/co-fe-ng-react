import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TodoService } from '../todo.service';
import { TodosComponent } from '../todos/todos.component';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  const todo = { id: 1, todo: 'Learn Angular', isCompleted: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'todos', component: TodosComponent },
        ]),
      ],
      declarations: [TodoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = todo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable todo edit', () => {
    component.handleEditTodo();
    expect(component.isEditing).toBeTrue();
    expect(component.updatedTodo).toEqual(component.todo.todo);
  });

  it('should handle todo toggle', () => {
    const todoService = fixture.debugElement.injector.get(TodoService);
    const updateTodoSpy = spyOn(todoService, 'updateTodo').and.returnValue(
      of(todo)
    );
    component.handleTodoToggle({ target: { checked: true } });
    expect(updateTodoSpy).toHaveBeenCalledOnceWith({
      ...todo,
      isCompleted: true,
    });
  });
  
  it('should handle todo update', () => {
    const todoService = fixture.debugElement.injector.get(TodoService);
    const updateTodoSpy = spyOn(todoService, 'updateTodo').and.returnValue(
      of(todo)
    );
    component.updatedTodo = '     ';
    expect(component.handleUpdateTodo()).toBeFalsy();
    
    component.updatedTodo = 'Learn Angular 14';
    component.handleUpdateTodo();
    expect(updateTodoSpy).toHaveBeenCalledOnceWith({
      ...todo,
      todo: 'Learn Angular 14',
    });
  });

  it('should handle delete todo request', () => {
    const todoService = fixture.debugElement.injector.get(TodoService);
    const deleteTodoSpy = spyOn(todoService, 'deleteTodo').and.returnValue(
      of(todo)
    );
    fixture.ngZone?.run(
      fakeAsync(() => {
        component.handleDeleteTodo();
        tick(100);
        expect(deleteTodoSpy).toHaveBeenCalledOnceWith(todo.id);
      })
    );
  });
});
