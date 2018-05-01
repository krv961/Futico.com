import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmelitaComponent } from './carmelita.component';

describe('CarmelitaComponent', () => {
  let component: CarmelitaComponent;
  let fixture: ComponentFixture<CarmelitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmelitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmelitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
