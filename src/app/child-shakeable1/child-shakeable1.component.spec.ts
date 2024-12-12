import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildShakeable1Component } from './child-shakeable1.component';

describe('ChildShakeable1Component', () => {
  let component: ChildShakeable1Component;
  let fixture: ComponentFixture<ChildShakeable1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildShakeable1Component]
    });
    fixture = TestBed.createComponent(ChildShakeable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
