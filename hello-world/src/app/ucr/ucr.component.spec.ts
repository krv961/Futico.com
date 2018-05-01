import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrComponent } from './ucr.component';

describe('UcrComponent', () => {
  let component: UcrComponent;
  let fixture: ComponentFixture<UcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
