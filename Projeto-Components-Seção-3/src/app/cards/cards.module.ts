import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardRoxoButtonComponent } from './card-roxo-button/card-roxo-button.component';
import { CardCancelButtomComponent } from './card-cancel-buttom/card-cancel-buttom.component';




@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent,
    CardCancelButtomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardRoxoComponent,
    CardCancelButtomComponent
  ]
})
export class CardsModule { }
