import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-education-card',
    templateUrl: './education-card.component.html',
    styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {
    @Input() from: string;
    @Input() to: string;
    @Input() name: string;
    @Input() department: string;
    @Input() distribution: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
