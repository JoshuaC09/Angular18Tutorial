import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    HomeComponent,
    CommonModule,
    ReversePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular 18 Tutorial';
  subtitle = 'Angular for beginners';
  todaydate = new Date();
  salary = 1000000;
  _obj = { name: 'Nt' };

  isDisabled = false;
}
