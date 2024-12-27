import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  backgroundColor = 'green';
  buttonSize = 100;
  classButton = true;

  alterSizeButton() {
    this.classButton = !this.classButton;
  }

  alterColorButton() {
    if (this.classButton === true) {
      this.backgroundColor = 'red';
    } else {
      this.backgroundColor = 'green';
    }
  }
}
