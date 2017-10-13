import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBikeComponent } from './day-bike.component';

describe('DayBikeComponent', () => {
  let component: DayBikeComponent;
  let fixture: ComponentFixture<DayBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
