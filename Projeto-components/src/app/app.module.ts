import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './cards/card/card.component';
import { CardRoxoComponent } from './cards/card-roxo/card-roxo.component';
import { CardButtonComponent } from './cards/card-button/card-button.component';
import { CardRoxoButtonComponent } from './cards/card-roxo-button/card-roxo-button.component';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
