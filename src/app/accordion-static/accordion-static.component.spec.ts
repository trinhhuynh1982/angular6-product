import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionStaticComponent } from './accordion-static.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AccordionStaticComponent', () => {
  let component: AccordionStaticComponent;
  let fixture: ComponentFixture<AccordionStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionStaticComponent ],
      imports: [NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
