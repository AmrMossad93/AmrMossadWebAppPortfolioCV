import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { EducationCardComponent } from './education-card/education-card.component';
import { CertificationCardComponent } from './certification-card/certification-card.component';
import { ServicesCardComponent } from './services-card/services-card.component';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [ProgressBarComponent, ExperienceCardComponent, EducationCardComponent, CertificationCardComponent, ServicesCardComponent],
    exports: [
        ExperienceCardComponent,
        EducationCardComponent,
        CertificationCardComponent,
        ServicesCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
