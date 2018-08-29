import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-icrdcr-value',
    templateUrl: './icrdcr-value.component.html',
    styleUrls: ['./icrdcr-value.component.css']
})
export class IcrdcrValueComponent implements OnInit {
    value = 0;
    message: string;
    
    constructor() { }

    ngOnInit() {
    }

    increment() {
        if (this.value < 15) {
            this.value += 1;
            this.message = '';
        } else {
            this.message = 'Maximum reached!';
        }
    }
    decrement() {
        if (this.value > 0) {
            this.value -= 1;
            this.message = '';
        } else {
            this.message = 'Minimum reached!';
        }
    }
}
