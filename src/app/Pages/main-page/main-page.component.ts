import {Component, OnInit} from '@angular/core';
import {ProgrammingSkillsService} from '../../Services/programming-skills.service';
import {IProgrammingSkills} from '../../Models/programming-skills';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
    programmingSkills: IProgrammingSkills[];

    constructor(private programmingSkillsService: ProgrammingSkillsService) {
    }

    ngOnInit(): void {
        this.getProgrammingSkillsDetails();
    }

    getProgrammingSkillsDetails() {
        this.programmingSkillsService.getProgrammingSkills().subscribe(res => {
            this.programmingSkills = res as IProgrammingSkills[];
            console.log(this.programmingSkills);
        });
    }
}
