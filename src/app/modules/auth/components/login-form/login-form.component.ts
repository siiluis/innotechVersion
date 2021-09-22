import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((e) => {
      console.log(this.loginForm);
    });
  }

  ingresar() {
    console.log(this.loginForm);
    /* this.email.setValue('Sdsds'); */
  }
}
