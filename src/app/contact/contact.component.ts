import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  ngAfterContentChecked(): void {
    console.log('Test angular hook ngAferContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('Test angular hooks ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('Test angular hooks ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Test angular hooks ngAfterViewChecked');
  }
  ngDoCheck(): void {
    console.log('Test angular hooks ngDoCheck');
  }
  ngOnInit(): void {
    console.log('Test angular hooks ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Test angular hooks ngOnChanges');
  }
}
