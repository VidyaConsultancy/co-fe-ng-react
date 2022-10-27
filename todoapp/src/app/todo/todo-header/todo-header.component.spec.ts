import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoHeaderComponent } from './todo-header.component';

describe('TodoHeaderComponent', () => {
  let component: TodoHeaderComponent;
  let fixture: ComponentFixture<TodoHeaderComponent>;
  const newTodo = 'Learn Angular';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TodoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addTodo event with newTodo value', () => {
    component.newTodo = newTodo;
    const eventSpy = spyOn(component.addTodoEventEmitter, 'emit');
    component.handleAddTodo();
    expect(eventSpy).toHaveBeenCalledOnceWith(newTodo);
    expect(component.newTodo).toEqual('');
  })
});
