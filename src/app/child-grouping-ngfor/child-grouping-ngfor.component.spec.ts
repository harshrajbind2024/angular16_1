import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildGroupingNgforComponent } from './child-grouping-ngfor.component';

describe('ChildGroupingNgforComponent', () => {
  let component: ChildGroupingNgforComponent;
  let fixture: ComponentFixture<ChildGroupingNgforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildGroupingNgforComponent]
    });
    fixture = TestBed.createComponent(ChildGroupingNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
