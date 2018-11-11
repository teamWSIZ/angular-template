import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombrowserComponent } from './roombrowser.component';

describe('RoombrowserComponent', () => {
  let component: RoombrowserComponent;
  let fixture: ComponentFixture<RoombrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoombrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoombrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
