import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildServiceComponent } from './child-service.component';

describe('ChildServiceComponent', () => {
  let component: ChildServiceComponent;
  let fixture: ComponentFixture<ChildServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildServiceComponent]
    });
    fixture = TestBed.createComponent(ChildServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
