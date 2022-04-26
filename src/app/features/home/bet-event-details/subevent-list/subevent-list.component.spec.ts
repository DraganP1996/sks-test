import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeventListComponent } from './subevent-list.component';

describe('SubeventListComponent', () => {
  let component: SubeventListComponent;
  let fixture: ComponentFixture<SubeventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubeventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubeventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
