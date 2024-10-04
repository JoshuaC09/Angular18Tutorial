import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Angular 18 Tutorial';
  subtitle = 'Angular for beginners';
  todaydate = new Date();
  salary = 1000000;
  _obj = { name: 'Nt' };

  isDisabled = false;
  _class = 'active';
  _color = 'blue';
  _font = '24px';

  isShow = false;

  ticketInfo = [
    {
      id: 1,
      name: 'angular1',
      color: 'green',
    },
    {
      id: 2,
      name: 'angular2',
      color: 'blue',
    },
    {
      id: 3,
      name: 'angular2',
      color: 'red',
    },
  ];

  _view = 'home';

  ChangeTitle() {
    this.title = 'angular 18 full turial';
  }
  UpdateTitle(event: any) {
    this.title = event.target.value;
  }
}
