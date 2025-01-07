import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  planTypeYellow: string = 'Simples';
  planPriceYellow: number = 100;

  planTypePurple: string = 'Completo';
  planPricePurple: number = 250;

  handlePlanType(meuInput: string) {
    this.planTypeYellow = meuInput
  }
}
