import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ SignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create user registeration form', () => {
    expect(component.userForm).toBeDefined();
  })

  it('should user form be invalid', () => {
    expect(component.userForm.invalid).toBeTrue();
  })

  it('should render register button as disabled', () => {
    const debugElement = fixture.debugElement;
    const registerBtn = debugElement.query(
      By.css('[data-test-id="registerBtn"]')
    );
    expect(registerBtn).toBeDefined();
    expect(registerBtn.attributes['disabled']).toBeDefined();
  });

  it('should check for email field validation', () => {
    component.userForm.controls['email'].patchValue('john.doe@mailinator.');
    expect(component.userForm.get('email')?.valid).toBeFalse();
    expect(component.userForm.get('email')?.errors).toBeDefined();
  })
  
  it('should check for password field validation', () => {
    component.userForm.controls['password'].patchValue('123456');
    expect(component.userForm.get('password')?.invalid).toBeTrue();
    expect(component.userForm.get('password')?.errors).toBeDefined();
  })
  
  it('should make user form valid with valid field values', () => {
    component.userForm.controls['email'].patchValue('john.doe@mailinator.com');
    component.userForm.controls['password'].patchValue('12345678');
    expect(component.userForm.valid).toBeTrue();

    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const registerBtn = debugElement.query(
      By.css('[data-test-id="registerBtn"]')
    );
    expect(registerBtn.attributes['disabled']).toBeUndefined();
  })
});
