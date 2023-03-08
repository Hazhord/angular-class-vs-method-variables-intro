import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // variables declared here will be class variables

  greet = 'Hello, world!';
  colors: string[] = ['red', 'blue', 'green', 'purple'];

  speak() {
    // variables declared here will be method variables
  }
}
