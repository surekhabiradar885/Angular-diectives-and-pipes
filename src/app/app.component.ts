import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'custom-directives-and-pipes';
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
