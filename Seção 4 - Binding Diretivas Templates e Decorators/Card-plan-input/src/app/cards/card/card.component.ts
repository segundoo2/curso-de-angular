import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true, alias: 'planTypeYellow' }) planTypeYellow: string = '';
  @Input({ required: true, alias: 'planPriceYellow' }) planPriceYellow: number = 0;
}
