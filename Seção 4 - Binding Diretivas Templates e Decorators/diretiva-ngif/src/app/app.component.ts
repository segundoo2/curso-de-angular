import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  divA = true;
  divB = false;

  toggleDiv() {
    this.divA = !this.divA;
    this.divB = !this.divB;
  }
}
