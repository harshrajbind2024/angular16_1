import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTrackApiDataComponent } from './child-track-api-data.component';

describe('ChildTrackApiDataComponent', () => {
  let component: ChildTrackApiDataComponent;
  let fixture: ComponentFixture<ChildTrackApiDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTrackApiDataComponent]
    });
    fixture = TestBed.createComponent(ChildTrackApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
