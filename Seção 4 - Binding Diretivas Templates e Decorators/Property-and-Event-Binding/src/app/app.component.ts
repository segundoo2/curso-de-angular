import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputType = 'text';
  inputValue = 'Hello World';
  inputValueSculpted = 'Hello World';

  modifyInputValue() {
    this.inputValue = 'Hello Angular';
  }

  sculptInputValue(event: any) {
    
    const currentValue = (event.target as HTMLInputElement).value;
    console.log(currentValue);
  }
}
