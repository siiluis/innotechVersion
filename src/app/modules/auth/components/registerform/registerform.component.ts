import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  btnText = 'Registrar';
  actionAuth: string = 'login';

  registerForm = new FormGroup({
    nombre:new FormControl('Luis',[Validators.required]),
    email: new FormControl('luis@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('dsdsd', [Validators.required]),
  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registrar() {
    this.authService.actionAuth(this.registerForm.value, this.actionAuth);
  }
}
