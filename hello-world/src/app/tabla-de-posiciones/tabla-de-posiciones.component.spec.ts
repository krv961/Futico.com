import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDePosicionesComponent } from './tabla-de-posiciones.component';

describe('TablaDePosicionesComponent', () => {
  let component: TablaDePosicionesComponent;
  let fixture: ComponentFixture<TablaDePosicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDePosicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDePosicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
