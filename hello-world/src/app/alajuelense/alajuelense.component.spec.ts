import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlajuelenseComponent } from './alajuelense.component';

describe('AlajuelenseComponent', () => {
  let component: AlajuelenseComponent;
  let fixture: ComponentFixture<AlajuelenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlajuelenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlajuelenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
