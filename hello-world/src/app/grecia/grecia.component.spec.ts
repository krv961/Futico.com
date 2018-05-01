import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreciaComponent } from './grecia.component';

describe('GreciaComponent', () => {
  let component: GreciaComponent;
  let fixture: ComponentFixture<GreciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
