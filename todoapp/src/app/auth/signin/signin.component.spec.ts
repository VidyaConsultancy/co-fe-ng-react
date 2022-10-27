import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TodosComponent } from 'src/app/todo/todos/todos.component';

import { AuthService } from '../auth.service';
import { SignupSuccessResponse } from '../interfaces/signup-success-response';
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: 'todos',
            component: TodosComponent,
          },
        ]),
      ],
      declarations: [SigninComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create user registeration form', () => {
    expect(component.userForm).toBeDefined();
  });

  it('should user form be invalid', () => {
    expect(component.userForm.invalid).toBeTrue();
  });

  it('should render login button as disabled', () => {
    const debugElement = fixture.debugElement;
    const loginBtn = debugElement.query(By.css('[data-test-id="loginBtn"]'));
    expect(loginBtn).toBeDefined();
    expect(loginBtn.attributes['disabled']).toBeDefined();
  });

  it('should check for email field validation', () => {
    component.userForm.controls['email'].patchValue('john.doe@mailinator.');
    expect(component.userForm.get('email')?.valid).toBeFalse();
    expect(component.userForm.get('email')?.errors).toBeDefined();
  });

  it('should check for password field validation', () => {
    component.userForm.controls['password'].patchValue('123456');
    expect(component.userForm.get('password')?.invalid).toBeTrue();
    expect(component.userForm.get('password')?.errors).toBeDefined();
  });

  it('should make user form valid with valid field values', () => {
    component.userForm.controls['email'].patchValue('john.doe@mailinator.com');
    component.userForm.controls['password'].patchValue('12345678');
    expect(component.userForm.valid).toBeTrue();

    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const loginBtn = debugElement.query(By.css('[data-test-id="loginBtn"]'));
    expect(loginBtn.attributes['disabled']).toBeUndefined();
  });

  it('should invoke handleRegister method on Register button/submit form click', () => {
    const submitSpy = spyOn(component, 'handleLogin');
    const debugElement = fixture.debugElement;
    const loginForm = debugElement.query(
      By.css('[data-test-id="loginForm"]')
    );

    component.userForm.controls['email'].patchValue('john.doe@mailinator.com');
    component.userForm.controls['password'].patchValue('12345678');
    fixture.detectChanges();
    loginForm.triggerEventHandler('submit', {});
    expect(submitSpy).toHaveBeenCalled();
    expect(submitSpy).toHaveBeenCalledTimes(1);
  });

  it('should invoke register method on authService when registerForm is submitted', () => {
    const authService = fixture.debugElement.injector.get(AuthService);
    const user = { email: 'john.doe@mailinator.com', password: '12345678' };
    expect(component.handleLogin()).toBeFalsy();

    component.userForm.controls['email'].patchValue(user.email);
    component.userForm.controls['password'].patchValue(user.password);
    const authRegisterSpy = spyOn(authService, 'login').and.returnValue(
      of<SignupSuccessResponse>({
        accessToken: 'asecureaccesstoken',
        user: { email: user.email, id: 1 },
      })
    );

    fixture.ngZone?.run(
      fakeAsync(() => {
        component.handleLogin();
        expect(authRegisterSpy).toHaveBeenCalledOnceWith(user);
        expect(localStorage.getItem('accessToken')).toEqual(
          'asecureaccesstoken'
        );
        const location = fixture.debugElement.injector.get(Location);
        tick(100);
        expect(location.path()).toContain('todos');
      })
    );
  });
});
