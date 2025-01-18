import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true, alias: 'text' }) 
  buttonText: string = '';

  @Input({ required: true, alias: 'style' }) 
  buttonStyle: 'white' | 'purple' = 'white';

  @Input({ alias: 'disabled' })
  isDisabled: boolean = false;

  @Output('cliked') buttonClikedEmitt = new EventEmitter<void>()

  onButtonCliked() {
    this.buttonClikedEmitt.emit()
  }
}
