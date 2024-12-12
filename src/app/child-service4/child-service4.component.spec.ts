import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildService4Component } from './child-service4.component';

describe('ChildService4Component', () => {
  let component: ChildService4Component;
  let fixture: ComponentFixture<ChildService4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildService4Component]
    });
    fixture = TestBed.createComponent(ChildService4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
