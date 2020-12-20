import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
    @Input() projectName: string;
    @Input() id: number;
    @Input() type: string;
    @Input() image: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
