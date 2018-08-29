import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPreventChangeComponent } from './accordion-prevent-change.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AccordionPreventChangeComponent', () => {
  let component: AccordionPreventChangeComponent;
  let fixture: ComponentFixture<AccordionPreventChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionPreventChangeComponent ],
      imports: [NgbModule.forRoot()]
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
