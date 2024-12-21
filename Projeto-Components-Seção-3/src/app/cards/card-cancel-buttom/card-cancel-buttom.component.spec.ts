import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCancelButtomComponent } from './card-cancel-buttom.component';

describe('CardCancelButtomComponent', () => {
  let component: CardCancelButtomComponent;
  let fixture: ComponentFixture<CardCancelButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCancelButtomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCancelButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
