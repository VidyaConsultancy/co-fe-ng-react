import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public userForm: FormGroup;
  /* 
  public username: FormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);
  public password: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  public userForm: FormGroup = new FormGroup({
    usernameUF: new FormControl('', [Validators.email, Validators.required]),
    passwordUF: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  }); */

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.userForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  handleRegister() {
    if(this.userForm.invalid) {
      return;
    }
    this.authService.register(this.userForm.value).subscribe((res) => {
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.userForm.reset();
      this.router.navigateByUrl('/todos');
    })
  }
}
