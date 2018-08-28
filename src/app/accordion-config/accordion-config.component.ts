import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-accordion-config',
    templateUrl: './accordion-config.component.html',
    styleUrls: ['./accordion-config.component.css']
})
export class AccordionConfigComponent implements OnInit {

    constructor(config: NgbAccordionConfig) {
        console.log(config);
        config.closeOthers = true;
        config.type = 'info';
    }

    ngOnInit() {
    }

}
