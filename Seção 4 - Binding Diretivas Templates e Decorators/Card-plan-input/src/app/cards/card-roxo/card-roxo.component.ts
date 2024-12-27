import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-roxo',
  standalone: false,
  
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss'
})
export class CardRoxoComponent {
  @Input({ required: true, alias: 'planTypePurple' }) planTypePurple: string = 'Complete';

  @Input({ required: true, alias: 'planPricePurple' }) planPricePurple: number = 200;
}
