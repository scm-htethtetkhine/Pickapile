import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardComponent } from './display-card.component';

describe('DisplayCardComponent', () => {
  let component: DisplayCardComponent;
  let fixture: ComponentFixture<DisplayCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCardComponent]
    });
    fixture = TestBed.createComponent(DisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
