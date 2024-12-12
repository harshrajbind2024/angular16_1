import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPipesComponent } from './child-pipes.component';

describe('ChildPipesComponent', () => {
  let component: ChildPipesComponent;
  let fixture: ComponentFixture<ChildPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildPipesComponent]
    });
    fixture = TestBed.createComponent(ChildPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
