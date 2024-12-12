import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgstyleComponent } from './child-ngstyle.component';

describe('ChildNgstyleComponent', () => {
  let component: ChildNgstyleComponent;
  let fixture: ComponentFixture<ChildNgstyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildNgstyleComponent]
    });
    fixture = TestBed.createComponent(ChildNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
