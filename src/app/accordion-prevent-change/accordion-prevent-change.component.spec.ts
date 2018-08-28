import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPreventChangeComponent } from './accordion-prevent-change.component';

describe('AccordionPreventChangeComponent', () => {
  let component: AccordionPreventChangeComponent;
  let fixture: ComponentFixture<AccordionPreventChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionPreventChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPreventChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
