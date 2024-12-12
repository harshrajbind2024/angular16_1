import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgclassComponent } from './child-ngclass.component';

describe('ChildNgclassComponent', () => {
  let component: ChildNgclassComponent;
  let fixture: ComponentFixture<ChildNgclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildNgclassComponent]
    });
    fixture = TestBed.createComponent(ChildNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
