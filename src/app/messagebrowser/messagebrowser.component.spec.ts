import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagebrowserComponent } from './messagebrowser.component';

describe('MessagebrowserComponent', () => {
  let component: MessagebrowserComponent;
  let fixture: ComponentFixture<MessagebrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagebrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagebrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
