import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDirectivesComponent } from './child-directives.component';

describe('ChildDirectivesComponent', () => {
  let component: ChildDirectivesComponent;
  let fixture: ComponentFixture<ChildDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildDirectivesComponent]
    });
    fixture = TestBed.createComponent(ChildDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
