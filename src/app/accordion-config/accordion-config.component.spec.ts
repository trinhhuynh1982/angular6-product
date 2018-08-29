import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionConfigComponent } from './accordion-config.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AccordionConfigComponent', () => {
  let component: AccordionConfigComponent;
  let fixture: ComponentFixture<AccordionConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionConfigComponent ],
      imports: [NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
