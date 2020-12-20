import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    constructor(private dataService: DataService) {
    }

    getProjects() {
        return this.dataService.get('projects.json');
    }
}
