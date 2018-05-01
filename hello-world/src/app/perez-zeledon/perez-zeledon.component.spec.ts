import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerezZeledonComponent } from './perez-zeledon.component';

describe('PerezZeledonComponent', () => {
  let component: PerezZeledonComponent;
  let fixture: ComponentFixture<PerezZeledonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerezZeledonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerezZeledonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
