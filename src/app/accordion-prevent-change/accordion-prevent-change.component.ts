import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion-prevent-change',
  templateUrl: './accordion-prevent-change.component.html',
  styleUrls: ['./accordion-prevent-change.component.css']
})
export class AccordionPreventChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  beforeChange($event: NgbPanelChangeEvent) {
      console.log($event);
      if ($event.panelId === 'preventchange-2') {
          $event.preventDefault();
      }
      if ($event.panelId === 'preventchange-3' && $event.nextState == false) {
        $event.preventDefault();
      }
  }

}
