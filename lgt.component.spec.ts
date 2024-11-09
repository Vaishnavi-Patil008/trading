import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgtComponent } from './lgt.component';

describe('LgtComponent', () => {
  let component: LgtComponent;
  let fixture: ComponentFixture<LgtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LgtComponent]
    });
    fixture = TestBed.createComponent(LgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
