import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public username: FormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);
  public password: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  public userForm: FormGroup;
  /* public userForm: FormGroup = new FormGroup({
    usernameUF: new FormControl('', [Validators.email, Validators.required]),
    passwordUF: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  }); */

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      usernameUF: ['', [Validators.email, Validators.required]],
      passwordUF: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  handleRegister() {
    console.log(this.userForm.value);
  }
}
