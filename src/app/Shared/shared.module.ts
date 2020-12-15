import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { EducationCardComponent } from './education-card/education-card.component';
import { CertificationCardComponent } from './certification-card/certification-card.component';



@NgModule({
    declarations: [ProgressBarComponent, ExperienceCardComponent, EducationCardComponent, CertificationCardComponent],
    exports: [
        ExperienceCardComponent,
        EducationCardComponent,
        CertificationCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
