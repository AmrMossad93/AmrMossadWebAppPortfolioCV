import {Component, OnInit} from '@angular/core';
import {ProgrammingSkillsService} from '../../Services/programming-skills.service';
import {IProgrammingSkills} from '../../Models/programming-skills';
import {ExperienceService} from '../../Services/experience.service';
import {IExperience} from '../../Models/experience';
import {EducationService} from '../../Services/education.service';
import {IEducation} from '../../Models/education';
import {CertificationService} from '../../Services/certification.service';
import {ICertification} from '../../Models/certification';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
    programmingSkills: IProgrammingSkills[];
    experiences: IExperience[];
    educations: IEducation[];
    certification: ICertification[];

    constructor(
        private programmingSkillsService: ProgrammingSkillsService,
        private certificationService: CertificationService,
        private experienceService: ExperienceService,
        private educationService: EducationService
    ) {
    }

    ngOnInit(): void {
        this.getProgrammingSkillsDetails();
        this.getAllExperience();
        this.getAllEducations();
        this.getCertifications();
    }

    getProgrammingSkillsDetails() {
        this.programmingSkillsService.getProgrammingSkills().subscribe(res => {
            this.programmingSkills = res as IProgrammingSkills[];
        });
    }

    getAllExperience() {
        this.experienceService.getExperienceJobs().subscribe(res => {
            this.experiences = res as IExperience[];
        });
    }

    getAllEducations() {
        this.educationService.getEducationDetails().subscribe(res => {
            this.educations = res as IEducation[];
        });
    }

    getCertifications() {
        this.certificationService.getAllCertifications().subscribe(res => {
            this.certification = res as ICertification[];
        });
    }
}
