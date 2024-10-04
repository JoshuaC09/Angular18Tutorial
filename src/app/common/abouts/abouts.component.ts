import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abouts',
  standalone: true,
  imports: [],
  templateUrl: './abouts.component.html',
  styleUrl: './abouts.component.css',
})
export class AboutsComponent implements OnInit {
  routeValue: any;
  sumMenu: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeValue = this.route.snapshot.paramMap.get('id');
    this.sumMenu = this.route.snapshot.paramMap.get('submenu');
    console.log(this.routeValue);
    console.log(this.sumMenu);
  }
}
