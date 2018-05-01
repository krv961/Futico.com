import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaginesComponent } from './cartagines.component';

describe('CartaginesComponent', () => {
  let component: CartaginesComponent;
  let fixture: ComponentFixture<CartaginesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaginesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
