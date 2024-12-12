import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwowayBindingComponent } from './child-twoway-binding.component';

describe('ChildTwowayBindingComponent', () => {
  let component: ChildTwowayBindingComponent;
  let fixture: ComponentFixture<ChildTwowayBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTwowayBindingComponent]
    });
    fixture = TestBed.createComponent(ChildTwowayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
