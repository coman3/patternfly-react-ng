import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternFlyComponentsComponent } from './pattern-fly-components.component';

describe('PatternFlyComponentsComponent', () => {
  let component: PatternFlyComponentsComponent;
  let fixture: ComponentFixture<PatternFlyComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternFlyComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternFlyComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
