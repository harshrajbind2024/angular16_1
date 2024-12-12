import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildService3Component } from './child-service3.component';

describe('ChildService3Component', () => {
  let component: ChildService3Component;
  let fixture: ComponentFixture<ChildService3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildService3Component]
    });
    fixture = TestBed.createComponent(ChildService3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
