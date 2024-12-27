import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  planTypeYellow: string = 'SIMPLES';
  planPriceYellow: number = 100;

  planTypePurple: string = 'COMPLETO';
  planPricePurple: number = 250;
}
