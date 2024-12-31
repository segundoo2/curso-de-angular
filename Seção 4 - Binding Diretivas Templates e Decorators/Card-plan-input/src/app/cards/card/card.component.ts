import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private _planTypeYellow: string = '';
  @Input({ required: true, alias: 'planTypeYellow' }) 
  set planTypeYellow(value: string) {
    this._planTypeYellow = value.toUpperCase();
  }

  get planTypeYellow(): string {
    return this._planTypeYellow;
  }

  @Input({ required: true, alias: 'planPriceYellow' }) planPriceYellow: number = 0;

  buttonCliked(valueEmitted: boolean) {
    console.log('Button clicked', valueEmitted);
  }
}
