import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempFeelComponent } from './temp-feel.component';

describe('TempFeelComponent', () => {
  let component: TempFeelComponent;
  let fixture: ComponentFixture<TempFeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempFeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempFeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
