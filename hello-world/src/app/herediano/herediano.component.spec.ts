import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeredianoComponent } from './herediano.component';

describe('HeredianoComponent', () => {
  let component: HeredianoComponent;
  let fixture: ComponentFixture<HeredianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeredianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeredianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
