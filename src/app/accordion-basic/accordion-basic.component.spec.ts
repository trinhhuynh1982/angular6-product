import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBasicComponent } from './accordion-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AccordionBasicComponent', () => {
  let component: AccordionBasicComponent;
  let fixture: ComponentFixture<AccordionBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionBasicComponent ],
      imports: [NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
