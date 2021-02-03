import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent {

  @Input() text: string;

  @Output() buttonClick = new EventEmitter<any>();

}
