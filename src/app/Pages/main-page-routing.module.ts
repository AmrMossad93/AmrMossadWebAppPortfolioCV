import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ProjectDetailsComponent} from './main-page/project-details/project-details.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'project-details/:id', component: ProjectDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainPageRoutingModule {
}
