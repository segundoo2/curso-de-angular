import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,
  
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  @Input({ alias: 'buttonDisabled', transform: booleanAttribute }) buttonDisabled: boolean = false;
  
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {


    console.log('Button click');

    this.buttonClickEmitter.emit(true);
  }
}
