import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  color = '';
  condition: boolean = true;

  //pipes
  name: Promise<string | null>;
  value: number = 0;

  constructor() {
    this.name = this.getName();
  }

  getName(): Promise<string> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve('John Mack');
      }, 5000);
    });
  }
}
