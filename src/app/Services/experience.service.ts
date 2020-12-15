import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private dataService: DataService) {
    }

    getExperienceJobs() {
        return this.dataService.get('experience.json');
    }
}
