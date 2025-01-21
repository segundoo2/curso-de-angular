import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'Edilson';
  estudante: string = '';
nameDev($event: string) {
  if(this.name === 'Edilson') {
    this.estudante = 'Estudante de programação';
  }
}
}
