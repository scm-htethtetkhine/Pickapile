import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCardComponent } from './detail-card.component';

describe('DetailCardComponent', () => {
  let component: DetailCardComponent;
  let fixture: ComponentFixture<DetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCardComponent]
    });
    fixture = TestBed.createComponent(DetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
