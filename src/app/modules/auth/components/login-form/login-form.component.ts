import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'form-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  btnText = 'Ingresar';


  loginForm = new FormGroup({
    email: new FormControl('luissarmiento@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('12345', [Validators.required]),
  });
  constructor(private route: ActivatedRoute, private authService: AuthService) {

  }

  ngOnInit(): void {

  }

  ingresar() {
    this.authService.login(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value);
  }
}
