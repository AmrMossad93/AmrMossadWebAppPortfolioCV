import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../Services/projects.service';
import {IProject} from '../../../Models/project';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
    projectId: number;
    projects: IProject[];
    project: IProject;

    constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {
        this.route.params.subscribe(params => {
            this.projectId = +params.id;
        });
    }

    ngOnInit(): void {
        this.getProjectById();
    }

    getProjectById() {
        this.projectsService.getProjects().subscribe(res => {
            this.projects = res as IProject[];
        }, error => {
        }, () => {
            this.project = this.projects.filter(c => c.id === this.projectId)[0];
        });
    }

}
