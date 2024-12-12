import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildS2Component } from './child-s2.component';

describe('ChildS2Component', () => {
  let component: ChildS2Component;
  let fixture: ComponentFixture<ChildS2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildS2Component]
    });
    fixture = TestBed.createComponent(ChildS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
