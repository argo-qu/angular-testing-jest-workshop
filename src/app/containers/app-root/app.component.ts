import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  numbers = [];

  addNumbers(): void {
    this.numbers.push( (this.numbers.length + 1) * 100 );
  }

}
