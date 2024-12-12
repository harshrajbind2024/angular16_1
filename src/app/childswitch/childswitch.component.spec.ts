import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildswitchComponent } from './childswitch.component';

describe('ChildswitchComponent', () => {
  let component: ChildswitchComponent;
  let fixture: ComponentFixture<ChildswitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildswitchComponent]
    });
    fixture = TestBed.createComponent(ChildswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
