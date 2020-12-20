import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-client-card',
    templateUrl: './client-card.component.html',
    styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
    @Input() url: string;
    @Input() name: string;
    @Input() image: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
