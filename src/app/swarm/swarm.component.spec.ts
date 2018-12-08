import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwarmComponent } from './swarm.component';

describe('SwarmComponent', () => {
  let component: SwarmComponent;
  let fixture: ComponentFixture<SwarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
