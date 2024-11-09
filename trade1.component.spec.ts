import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trade1Component } from './trade1.component';

describe('Trade1Component', () => {
  let component: Trade1Component;
  let fixture: ComponentFixture<Trade1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Trade1Component]
    });
    fixture = TestBed.createComponent(Trade1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
