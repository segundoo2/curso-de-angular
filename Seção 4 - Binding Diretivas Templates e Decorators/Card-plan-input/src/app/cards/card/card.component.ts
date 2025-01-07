import { Component, Input } from '@angular/core';

function handlePlanType(value: string) {
  console.log(`Text original ${value}`);
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ 
    alias: 'planTypeYellow', 
    transform: (value: string) => handlePlanType(value)}) planTypeYellow: string = '';

  @Input({ required: true, alias: 'planPriceYellow' }) planPriceYellow: number = 0;

  buttonCliked(valueEmitted: boolean) {
    console.log('Button clicked', valueEmitted);
  }
}
