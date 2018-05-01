import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaprissaComponent } from './saprissa.component';

describe('SaprissaComponent', () => {
  let component: SaprissaComponent;
  let fixture: ComponentFixture<SaprissaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaprissaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaprissaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
