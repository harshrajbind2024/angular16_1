import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPagenotfoundComponent } from './child-pagenotfound.component';

describe('ChildPagenotfoundComponent', () => {
  let component: ChildPagenotfoundComponent;
  let fixture: ComponentFixture<ChildPagenotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildPagenotfoundComponent]
    });
    fixture = TestBed.createComponent(ChildPagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
