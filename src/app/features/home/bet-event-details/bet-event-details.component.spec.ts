import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetEventDetailsComponent } from './bet-event-details.component';

describe('BetEventDetailsComponent', () => {
  let component: BetEventDetailsComponent;
  let fixture: ComponentFixture<BetEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetEventDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
