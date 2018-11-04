import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombrowseComponent } from './roombrowse.component';

describe('RoombrowseComponent', () => {
  let component: RoombrowseComponent;
  let fixture: ComponentFixture<RoombrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoombrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoombrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
