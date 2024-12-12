import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRoutelinkComponent } from './child-routelink.component';

describe('ChildRoutelinkComponent', () => {
  let component: ChildRoutelinkComponent;
  let fixture: ComponentFixture<ChildRoutelinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildRoutelinkComponent]
    });
    fixture = TestBed.createComponent(ChildRoutelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
