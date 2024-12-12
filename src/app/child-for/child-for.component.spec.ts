import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForComponent } from './child-for.component';

describe('ChildForComponent', () => {
  let component: ChildForComponent;
  let fixture: ComponentFixture<ChildForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildForComponent]
    });
    fixture = TestBed.createComponent(ChildForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
