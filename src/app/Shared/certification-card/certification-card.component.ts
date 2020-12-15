import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-certification-card',
    templateUrl: './certification-card.component.html',
    styleUrls: ['./certification-card.component.scss']
})
export class CertificationCardComponent implements OnInit {
    @Input() imagePath: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
