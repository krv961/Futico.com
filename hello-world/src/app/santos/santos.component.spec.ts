import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantosComponent } from './santos.component';

describe('SantosComponent', () => {
  let component: SantosComponent;
  let fixture: ComponentFixture<SantosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
