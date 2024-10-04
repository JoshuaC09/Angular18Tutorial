import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, RouterLink, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  userinput = '';

  canNavigate() {
    if (this.userinput !== '') {
      if (
        confirm(
          'if you navigating your data going to lost. Do you want to continue>'
        )
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
