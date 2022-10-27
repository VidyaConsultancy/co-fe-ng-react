import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { Location } from '@angular/common';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todoapp'`, () => {
    expect(app.title).toEqual('todoapp');
  });

  it('should logout user', () => {
    const authService = fixture.debugElement.injector.get(AuthService);
    const logoutSpy = spyOn(authService, 'logout');
    fixture.ngZone?.run(
      fakeAsync(() => {
        app.logout();
        expect(logoutSpy).toHaveBeenCalledTimes(1);
        const location = fixture.debugElement.injector.get(Location);
        tick(100);
        expect(location.path()).toEqual('/');
      })
    );
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('todoapp app is running!');
  // });
});
