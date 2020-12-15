import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-experience-card',
    templateUrl: './experience-card.component.html',
    styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
    @Input() from: string;
    @Input() to: string;
    @Input() company: string;
    @Input() position: string;
    @Input() distribution: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
