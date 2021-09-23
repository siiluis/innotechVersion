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
  actionAuth: string = 'login';

  loginForm = new FormGroup({
    email: new FormControl('luis@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('dsdsd', [Validators.required]),
  });
  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.route.url.subscribe((route) => {
      this.actionAuth = route[0].path;
      if (route[0].path === 'register') {
        this.btnText = 'Registrar';
      }
    });
  }

  ngOnInit(): void {
    console.log(this.actionAuth);
  }

  ingresar() {
    this.authService.actionAuth(this.loginForm.value, this.actionAuth);
  }
}
