import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginModel } from '../../model/LoginModel';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private service: MasterService, private router: Router) {}
  ngOnInit(): void {
    localStorage.clear();
  }

  _loginData: LoginModel = {
    username: '',
    password: '',
  };

  ProceedLogin(form: any) {
    if (form.valid) {
      this.service.Proceedlogin(this._loginData).subscribe((item) => {
        let _response = item;
        if (_response.length > 0) {
          localStorage.setItem('username', this._loginData.username);
          this.router.navigateByUrl('');
        } else {
          alert('invalid credentials');
        }
      });
    }
  }
}
