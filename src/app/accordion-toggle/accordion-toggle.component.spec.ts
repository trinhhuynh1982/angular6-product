import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionToggleComponent } from './accordion-toggle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AccordionToggleComponent', () => {
  let component: AccordionToggleComponent;
  let fixture: ComponentFixture<AccordionToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionToggleComponent ],
      imports: [NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
