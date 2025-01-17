import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  plans = {
    simple: {
      type: 'Simples',
      price: 100,
    },
    complete: {
      type: 'Completo',
      price: 200,
    }
  }


  onCardButtonCliked() {
    console.log('onCardButtonCliked');
    //Chamada HTTP
  }
}
