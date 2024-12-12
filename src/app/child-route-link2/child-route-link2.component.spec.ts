import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteLink2Component } from './child-route-link2.component';

describe('ChildRouteLink2Component', () => {
  let component: ChildRouteLink2Component;
  let fixture: ComponentFixture<ChildRouteLink2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildRouteLink2Component]
    });
    fixture = TestBed.createComponent(ChildRouteLink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
