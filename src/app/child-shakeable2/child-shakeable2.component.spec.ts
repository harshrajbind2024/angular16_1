import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildShakeable2Component } from './child-shakeable2.component';

describe('ChildShakeable2Component', () => {
  let component: ChildShakeable2Component;
  let fixture: ComponentFixture<ChildShakeable2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildShakeable2Component]
    });
    fixture = TestBed.createComponent(ChildShakeable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
