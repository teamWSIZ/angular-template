import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertbarComponent } from './alertbar.component';

describe('AlertbarComponent', () => {
  let component: AlertbarComponent;
  let fixture: ComponentFixture<AlertbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
