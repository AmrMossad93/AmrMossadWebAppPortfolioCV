import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import {SharedModule} from '../Shared/shared.module';
import { ProjectDetailsComponent } from './main-page/project-details/project-details.component';


@NgModule({
  declarations: [MainPageComponent, ProjectDetailsComponent],
    imports: [
        CommonModule,
        MainPageRoutingModule,
        SharedModule
    ]
})
export class MainPageModule { }
