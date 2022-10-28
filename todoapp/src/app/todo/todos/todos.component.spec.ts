import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Todo } from '../models/todo.class';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoService } from '../todo.service';

import { TodosComponent } from './todos.component';

const todos: Todo[] = [
  { id: 1, todo: 'Learn HTML', isCompleted: true },
  { id: 2, todo: 'Learn CSS', isCompleted: false },
  { id: 3, todo: 'Learn JS', isCompleted: false },
];
const newTodo = 'Learn Angular';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ TodosComponent, TodoHeaderComponent, TodoFooterComponent, TodoListComponent ],
      providers: [TodoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init default property values', () => {
    expect(Array.isArray(component.todos)).toBeTrue();
    expect(component.todos.length).toBe(0);
    expect(component.appTitle).toEqual('Todos');
    expect(component.completed).toEqual(0);
  })

  it('should invoke fetchTodos method', () => {
    const fetchTodosSpy = spyOn(component, 'fetchTodos');
    component.ngOnInit();
    expect(fetchTodosSpy).toHaveBeenCalledTimes(1);
  })

  it('should invoke getTodos method of todoService and calculateCompletedTodos', () => {
    const todoService = fixture.debugElement.injector.get(TodoService);
    const getTodosSPy = spyOn(todoService, 'getTodos').and.returnValue(of(todos))
    const calcCompletedTodosSpy = spyOn(component, 'calculateCompletedTodos');

    component.fetchTodos();
    expect(getTodosSPy).toHaveBeenCalledTimes(1);
    expect(calcCompletedTodosSpy).toHaveBeenCalledTimes(1);
    expect(component.todos).toEqual(todos);
  })

  it('should calc completed todos count', () => {
    component.todos = todos;
    component.calculateCompletedTodos();
    expect(component.completed).toEqual(1);
  })

  it('should invoke handleAddTodo on addTodo event', () => {
    const debugElement = fixture.debugElement;
    const todoHeaderComp = debugElement.query(By.css('[data-test-id="appTodoHeader"]'))
    const handleAddTodoSpy = spyOn(component, 'handleAddTodo');
    todoHeaderComp.triggerEventHandler('addTodo', newTodo);
    expect(handleAddTodoSpy).toHaveBeenCalledOnceWith(newTodo);
  })

  it('should invoke createTodo on todoService', () => {
    const todoService = fixture.debugElement.injector.get(TodoService);
    const createTodoSpy = spyOn(todoService, 'createTodo').and.returnValue(of(new Todo(newTodo)));
    
    component.handleAddTodo('   ');
    expect(createTodoSpy).toHaveBeenCalledTimes(0);
    
    component.handleAddTodo(newTodo);
    expect(createTodoSpy).toHaveBeenCalledOnceWith(newTodo);
  });

  it('should pass appTitle to TodoHeaderComponent', () => {
    const debugElement = fixture.debugElement;
    const todoHeaderComp = debugElement.query(
      By.css('[data-test-id="appTodoHeader"]')
    );
    expect(todoHeaderComp.attributes['ng-reflect-title']).toEqual(component.appTitle);
  })
});
