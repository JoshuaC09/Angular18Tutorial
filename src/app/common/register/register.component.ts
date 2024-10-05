import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Role, User } from '../../model/LoginModel';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioButton,
    MatSelectModule,
    RouterLink,
    MatRadioModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  Roles: Role[] = [
    { value: 'salesman', viewValue: 'Salesman' },
    { value: 'supervisor', viewValue: 'SuperVisor' },
    { value: 'manager', viewValue: 'Manager' },
  ];

  registerForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: MasterService,
    private router: Router
  ) {
    this.registerForm = this.builder.group({
      username: this.builder.control('test', Validators.required),
      name: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      password: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      email: this.builder.control(
        '',
        Validators.compose([Validators.email, Validators.required])
      ),
      role: this.builder.control('salesman', Validators.required),
      gender: this.builder.control('m', Validators.required),
      terms: this.builder.control(true),
    });
  }

  // registerForm = new FormGroup({
  //   username: new FormControl('test', Validators.required),
  //   name: new FormControl(
  //     '',
  //     Validators.compose([Validators.required, Validators.minLength(5)])
  //   ),
  //   email: new FormControl(
  //     '',
  //     Validators.compose([Validators.email, Validators.required])
  //   ),
  //   role: new FormControl('salesman', Validators.required),
  //   gender: new FormControl('m', Validators.required),
  //   terms: new FormControl(true),
  // });

  ProceedRegister() {
    if (this.registerForm.valid) {
      if (this.registerForm.value.terms) {
        let _data: User = {
          id: this.registerForm.value.username as string,
          password: this.registerForm.value.password as string,
          name: this.registerForm.value.name as string,
          role: this.registerForm.value.role as string,
          gender: this.registerForm.value.gender as string,
          email: this.registerForm.value.email as string,
        };
        this.service.ProceedRegister(_data).subscribe((item) => {
          alert('Registered successfully.');
          this.router.navigateByUrl('/login');
        });
      } else {
        alert('Please agree terms & conditions and proceed.');
      }
    }

    // this.registerForm.setValue({ username: 'admin', name: 'user' });
  }
}
