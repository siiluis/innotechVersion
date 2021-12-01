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
    nombre:new FormControl('',[Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registrar() {
    const newUser = {
      nombre:this.registerForm.get('nombre')?.value,
      email:this.registerForm.get('email')?.value,
      password:this.registerForm.get('password')?.value
    }

    this.authService.register(newUser);
  }
}
